
import { useGSAP as useGSAPHook } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugins we need
gsap.registerPlugin(ScrollTrigger);

// Export the GSAP hook for use throughout the app
export const useGSAP = useGSAPHook;
export default gsap;
