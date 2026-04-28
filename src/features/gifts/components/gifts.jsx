import { useConfig } from "@/features/invitation/hooks/use-config";
import { motion } from "framer-motion";
import { Copy, Gift, CheckCircle, Wallet, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Gifts() {
  const config = useConfig(); // Use hook to get config from API or fallback to static
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Set animation to run once on component mount
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(bank);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  // Hide section if config or banks data is not set
  if (!config?.banks || config.banks.length === 0) {
    return null;
  }

  return (
    <>
      <section
        id="gifts"
        className="min-h-screen relative overflow-hidden bg-transparent"
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-amber-500 font-medium"
            >
              Regalo de Bodas
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Hacer un Regalo
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-amber-200" />
              <Gift className="w-5 h-5 text-amber-800" />
              <div className="h-[1px] w-12 bg-amber-200" />
            </motion.div>

            {/* Message Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 max-w-md mx-auto"
            >
              {/* Main Message */}
              <p className="text-gray-600 leading-relaxed font-medium">
                Para nosotros lo más importante es tu presencia, pero si
                quisieras hacernos un regalo, te dejamos nuestros datos
                bancarios.
              </p>

              {/* Gratitude Message */}
              <div className="space-y-2 pt-2">
                <p className="text-amber-950 font-serif text-xl italic">
                  &ldquo;¡Gracias por acompañarnos!&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Optional: Additional Decorative Element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-3 pt-4"
            >
              <div className="h-px w-8 bg-amber-200/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
              <div className="h-px w-8 bg-amber-200/50" />
            </motion.div>
          </motion.div>

          {/* Bank Accounts Grid */}
          <div className="max-w-2xl mx-auto grid gap-6">
            {config.banks.map((account, index) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index + 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/5 to-pink-100/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative backdrop-blur-md bg-white/70 p-6 rounded-2xl border border-amber-50/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Building2 className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 flex items-center gap-2">
                          {account.bank}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {account.accountName}
                        </p>
                      </div>
                    </div>
                    <Wallet className="w-5 h-5 text-amber-800" />
                  </div>

                  <div className="mt-4 space-y-3">
                    {/* Account Number / CVU */}
                    <div className="flex flex-col space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">
                        {account.country === "Argentina"
                          ? "CVU"
                          : "Nro. de Cuenta"}
                      </span>
                      <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                        <p className="font-mono text-sm text-gray-700 break-all mr-2">
                          {account.accountNumber}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            copyToClipboard(
                              account.accountNumber,
                              `number-${index}`,
                            )
                          }
                          className="flex items-center space-x-1 text-amber-500 hover:text-amber-950 shrink-0"
                        >
                          {copiedAccount === `number-${index}` ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span className="text-xs font-medium">
                            {copiedAccount === `number-${index}`
                              ? "¡Copiado!"
                              : "Copiar"}
                          </span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Alias (if exists) */}
                    {account.alias && (
                      <div className="flex flex-col space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">
                          Alias
                        </span>
                        <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                          <p className="font-mono text-sm text-gray-700">
                            {account.alias}
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              copyToClipboard(account.alias, `alias-${index}`)
                            }
                            className="flex items-center space-x-1 text-amber-500 hover:text-amber-950 shrink-0"
                          >
                            {copiedAccount === `alias-${index}` ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            <span className="text-xs font-medium">
                              {copiedAccount === `alias-${index}`
                                ? "¡Copiado!"
                                : "Copiar"}
                            </span>
                          </motion.button>
                        </div>
                      </div>
                    )}

                    {/* Chile specific: RUT and Account Type */}
                    {account.country === "Chile" && (
                      <div className="space-y-3">
                        {account.rut && (
                          <div className="flex flex-col space-y-1">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">
                              RUT
                            </span>
                            <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                              <p className="font-mono text-sm text-gray-700">
                                {account.rut}
                              </p>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                  copyToClipboard(account.rut, `rut-${index}`)
                                }
                                className="flex items-center space-x-1 text-amber-500 hover:text-amber-950 shrink-0"
                              >
                                {copiedAccount === `rut-${index}` ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                                <span className="text-xs font-medium">
                                  {copiedAccount === `rut-${index}`
                                    ? "¡Copiado!"
                                    : "Copiar"}
                                </span>
                              </motion.button>
                            </div>
                          </div>
                        )}
                        {account.accountType && (
                          <div className="flex flex-col space-y-1">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">
                              Tipo de Cuenta
                            </span>
                            <div className="bg-gray-50/80 px-4 py-3 rounded-lg">
                              <p className="text-sm text-gray-700">
                                {account.accountType}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

