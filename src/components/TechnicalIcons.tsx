import type { ReactNode, SVGProps } from "react";

// All domain symbols share Lucide's 24-unit geometry and inherit theme colors.
type TechnicalIconProps = SVGProps<SVGSVGElement> & { size?: number };

function technicalIcon(name: string, drawing: ReactNode) {
  function TechnicalIcon({ size = 24, strokeWidth = 1.8, ...props }: TechnicalIconProps) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" data-technical-icon={name} {...props}>
        {drawing}
      </svg>
    );
  }
  TechnicalIcon.displayName = name;
  return TechnicalIcon;
}

export const MeterIcon = technicalIcon("meter", <>
  <rect x="5" y="3" width="12" height="17" rx="2" /><path d="M8 6h6v5H8zM9 9l1-1 2 1 1-2M8 17h1m4 0h1M17 8h2v9l2 3" /><circle cx="11" cy="14.5" r="1.5" />
</>);
export const ThermalCameraIcon = technicalIcon("thermal-camera", <>
  <path d="M3 5h12l3 3v7H3zM8 15v6h5v-6M6 8h6v4H6zM18 9h3v5h-3" /><path d="M8 10h2m-4 8h2" /><circle cx="15" cy="10" r="1" />
</>);
export const AnalyzerIcon = technicalIcon("power-analyzer", <>
  <rect x="4" y="4" width="16" height="17" rx="2" /><path d="M7 8h10v7H7zM7 12h2l2-3 2 5 2-3h2M8 18h1m3 0h1m3 0h1M7 4V2m5 2V2m5 2V2" />
</>);
export const DistributionBoardIcon = technicalIcon("distribution-board", <>
  <rect x="4" y="2" width="16" height="20" rx="1" /><path d="M7 6h10M7 14h10M8 5v5h3V5m2 0v5h3V5M8 13v5h3v-5m2 0v5h3v-5M10 8h0m5 0h0m-5 8h0m5 0h0" />
</>);
export const CompensationIcon = technicalIcon("capacitor-bank", <>
  <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M6 7h12M7 7v4m5-4v4m5-4v4M5 11h4m1 0h4m1 0h4M5 14h4m1 0h4m1 0h4M7 14v4m5-4v4m5-4v4M6 18h12" />
</>);
export const SolarPanelIcon = technicalIcon("solar-panel", <>
  <path d="M5 6h14l3 12H2zM9 6 8 18m7-12 1 12M4 10h16M3 14h18M12 18v4m-4 0h8" /><path d="M12 2v1m6 0-1 1M6 3l1 1" />
</>);
export const LightningRodIcon = technicalIcon("lightning-rod", <>
  <path d="M2 13 12 7l10 6M4 12v8h16v-8M12 2v5m0 3v9m0 0v3m-3-3h6m-5 2h4M6 16h2v4" />
</>);
export const ChargingStationIcon = technicalIcon("charging-station", <>
  <rect x="3" y="3" width="11" height="18" rx="2" /><path d="M6 6h5v5H6zM7 14h3l-2 3h3M14 9h2v7a2 2 0 0 0 4 0V8m-2-4v4h4V4m-3 0V2m2 2V2M2 21h13" />
</>);
export const InstallationIcon = technicalIcon("electrical-installation", <>
  <path d="m2 10 10-8 10 8M5 8v13h14V8M12 7v5H8v3m4-3h4v3" /><rect x="6" y="15" width="4" height="4" rx="1" /><circle cx="16" cy="17" r="2" /><path d="M7.5 17h1m7.5-1v2" />
</>);
export const CableLocatorIcon = technicalIcon("cable-locator", <>
  <path d="M2 19h7l2-2 2 2h9M2 22h20M6 3h7v5H6zM9.5 8v6m-2 0h4M15 8c2 1 3 3 3 5M16 4c4 2 6 5 6 9" /><circle cx="11" cy="19" r="1" />
</>);
export const ElectricalMaterialIcon = technicalIcon("electrical-material", <>
  <rect x="2" y="4" width="8" height="16" rx="1" /><path d="M4 8h4M5 11h2v4H5zM4 18h4M13 6h8v8h-8zM15 9h0m4 0h0M13 18h7v3h-7M16 18v-4" />
</>);
export const CableConnectorIcon = technicalIcon("cable-connector", <>
  <path d="M7 2v3m4-3v3M5 5h8v4a4 4 0 0 1-8 0zM9 13v4a4 4 0 0 0 8 0v-4M14 13V9h6v4zM16 9V6m2 3V6" />
</>);
export const LightingIcon = technicalIcon("lighting", <>
  <path d="M12 2v5M8 7h8l4 7H4zM9 14a3 3 0 0 0 6 0M5 18l-2 2m16-2 2 2m-9-1v3" />
</>);
export const PliersIcon = technicalIcon("pliers", <>
  <path d="m7 2 3 5-2 4-4-5 1-3m12-1-3 5 2 4 4-5-1-3M8 11l8 10 3-2L12 9M16 11 8 21l-3-2 7-10" /><circle cx="12" cy="10" r="2" />
</>);
export const DrillIcon = technicalIcon("power-drill", <>
  <path d="M3 5h12v7H3zM15 7h4v3h-4m4-2h3M7 12l-1 7h7l-2-7M5 19h9v3H5zM6 8h3m-5 3h4" />
</>);
export const ExcavatorIcon = technicalIcon("excavator", <>
  <rect x="2" y="18" width="13" height="4" rx="2" /><path d="M4 18v-7h6l3 7M5 11V7h5v7H4M13 15l3-10 5 7m-5-7-4-2-3 4M21 12l1 6-4-1 1-3M6 20h5" />
</>);
export const SkidSteerIcon = technicalIcon("skid-steer", <>
  <circle cx="6" cy="19" r="3" /><circle cx="15" cy="19" r="3" /><path d="M3 16V8h11l2 8M6 8v6h6V8M3 14h12l4-4 1 8h3v3h-5M6 5h7l1 3" />
</>);
export const PlatformIcon = technicalIcon("work-platform", <>
  <circle cx="5" cy="20" r="2" /><circle cx="12" cy="20" r="2" /><path d="M3 18h11v-3H3zM10 15l5-6-3-4m-5 10 6-7-3-3M10 5h12V2H10zM13 5v3h7V5M18 2v3" />
</>);
export const GeneratorIcon = technicalIcon("generator", <>
  <rect x="2" y="5" width="20" height="15" rx="2" /><path d="M8 5V2h8v3M6 9h7v7H6zM8 11h3m-3 2h3m-3 2h3M4 20v2m16-2v2" /><circle cx="18" cy="10" r="1.5" /><circle cx="18" cy="15" r="1.5" />
</>);
export const CraneTruckIcon = technicalIcon("crane-truck", <>
  <circle cx="5" cy="20" r="2" /><circle cx="13" cy="20" r="2" /><circle cx="20" cy="20" r="2" /><path d="M2 18v-7h6v7h14v-6h-6M3 14h3M10 18V8l7-5 4 6m-11-1-2-2 8-4 2 1M21 9v4l-1 1" />
</>);
export const TractorIcon = technicalIcon("tractor-platform", <>
  <circle cx="8" cy="18" r="4" /><circle cx="19" cy="20" r="2" /><path d="M5 14V5h8v11h7v2M8 5v7h5m0-4h3v8M2 15v5h2M2 11h3M2 8h3M5 4h8M17 12h5v4h-5M19 12V9" />
</>);
export const FlatbedIcon = technicalIcon("flatbed-truck", <>
  <circle cx="6" cy="20" r="2" /><circle cx="18" cy="20" r="2" /><path d="M2 18V8h6l3 5v5h11v-5H11M3 10h4l2 4H3zM12 13v-3h10v3M15 10v3m4-3v3M2 18h20" />
</>);