import "@jxa/global-type";
import { run } from "@jxa/run";

/**
 * get safari version
 */
export const safariVersion = () => {
    // This function is JXA
    return run(() => {
        const Safari = Application("Safari");
        return Safari.version();
    });
};

/**
 * get safari version
 */
export const isSafariWaking = () => {
    // This function is JXA
    return run(() => {
        function isAppWaking(appName: string): boolean {
          const se = Application('System Events');
          return se.processes().some(function (process: any) {
            return process.name() === appName;
          });
        }
        const isWaking = isAppWaking("Safari");
        return isWaking;
    });
};

// This main is just a Node.js code
export const browser = async () => {
  const version = await safariVersion();
  const isWaking = await isSafariWaking();
  return `Safari: ${version} ${isWaking ? "is waking" : "is not waking"}`;
};
