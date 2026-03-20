import Hero from "@/features/invitation/components/hero";
import { Events } from "@/features/events";
import ImmersionGallery from "./immersion-gallery";
import { Location, VenuePhotos } from "@/features/location";
import { Wishes } from "@/features/wishes";
import { Gifts } from "@/features/gifts";

// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Hero />
      <ImmersionGallery />
      <Events />
      <Location />
      <VenuePhotos />
      <Gifts />
      <Wishes />
    </>
  );
}
