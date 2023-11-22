import {
  fireSafePalette,
  froyLogoPalette,
  gkModePalette,
  lightModePalette,
  newSecModePalette,
  ThemePalette,
} from "../providers";
import { useEffect, useState } from "react";
import { LocalStorageKeys, useLocalStorage } from "./useLocalStorage";
import useThemeContext from "./useThemeContext";

export enum SimulatedTenant {
  // eslint-disable-next-line no-unused-vars
  GK = "gk",

  // eslint-disable-next-line no-unused-vars
  NEWSEC = "newsec",

  // eslint-disable-next-line no-unused-vars
  FIRESAFE = "firesafe",

  // eslint-disable-next-line no-unused-vars
  FROY = "froy",

  // eslint-disable-next-line no-unused-vars
  NONE = "none",
}

export enum SimulatedTenantLogoSrc {
  // eslint-disable-next-line no-unused-vars
  PISCADA = "/piscadaLogo.png",

  // eslint-disable-next-line no-unused-vars
  GK = "/gkLogo.png",

  // eslint-disable-next-line no-unused-vars
  FIRESAFE = "/fireSafeLogo.png",

  // eslint-disable-next-line no-unused-vars
  FROY = "/froyLogo.png",

  // eslint-disable-next-line no-unused-vars
  NEWSEC = "/newsecLogo.png",

  // eslint-disable-next-line no-unused-vars
  NONE = "",
}

export interface IUseSimulateTenantProps {
  isSimulating: boolean;
  simulatedTenant: SimulatedTenant | null;
  simulatedTenantPalette: ThemePalette;
  simulatedTenantLogoSrc: SimulatedTenantLogoSrc;
}

export const useSimulateTenant = (): IUseSimulateTenantProps => {
  const [mode] = useThemeContext();
  const { getValueFromLocalStorage } = useLocalStorage();

  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedTenant, setSimulatedTenant] = useState<SimulatedTenant | null>(null);

  const [simulatedTenantLogoSrc, setSimulatedTenantLogoSrc] = useState<SimulatedTenantLogoSrc>(
    SimulatedTenantLogoSrc.NONE
  );
  const [simulatedTenantPalette, setSimulatedTenantPalette] =
    useState<ThemePalette>(lightModePalette);

  useEffect(() => {
    const simulatedTenantFromStore = getValueFromLocalStorage<SimulatedTenant>(
      LocalStorageKeys.TenantEmulation
    );
    const checkIfSimulating = (): boolean => {
      if (simulatedTenantFromStore !== null && simulatedTenantFromStore !== SimulatedTenant.NONE) {
        return true;
      }
      return false;
    };
    setIsSimulating(checkIfSimulating);
    if (isSimulating) {
      setSimulatedTenant(simulatedTenantFromStore);
    }

    const getLogoSrcForSimulatedTenant = (tenant: SimulatedTenant): SimulatedTenantLogoSrc => {
      switch (tenant) {
        case SimulatedTenant.GK:
          return SimulatedTenantLogoSrc.GK;
        case SimulatedTenant.NEWSEC:
          return SimulatedTenantLogoSrc.NEWSEC;
        case SimulatedTenant.FIRESAFE:
          return SimulatedTenantLogoSrc.FIRESAFE;
        case SimulatedTenant.FROY:
          return SimulatedTenantLogoSrc.FROY;
        case SimulatedTenant.NONE:
          return SimulatedTenantLogoSrc.NONE;
        default:
          return SimulatedTenantLogoSrc.NONE;
      }
    };

    const getPaletteForSimulatedTenant = (tenant: SimulatedTenant): ThemePalette => {
      switch (tenant) {
        case SimulatedTenant.GK:
          return gkModePalette;
        case SimulatedTenant.NEWSEC:
          return newSecModePalette;
        case SimulatedTenant.FIRESAFE:
          return fireSafePalette;
        case SimulatedTenant.FROY:
          return froyLogoPalette;
        case SimulatedTenant.NONE:
          return lightModePalette;
        default:
          return lightModePalette;
      }
    };

    if (simulatedTenant) {
      setSimulatedTenantLogoSrc(getLogoSrcForSimulatedTenant(simulatedTenant));
      setSimulatedTenantPalette(getPaletteForSimulatedTenant(simulatedTenant));
    } else {
      setSimulatedTenantLogoSrc(getLogoSrcForSimulatedTenant(SimulatedTenant.NONE));
      setSimulatedTenantPalette(getPaletteForSimulatedTenant(SimulatedTenant.NONE));
    }
  }, [getValueFromLocalStorage, isSimulating, simulatedTenant, mode]);

  return {
    isSimulating,
    simulatedTenant,
    simulatedTenantLogoSrc,
    simulatedTenantPalette,
  };
};
