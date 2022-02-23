import { theme, isChakraTheme } from '@chakra-ui/theme';
import { Dict, isFunction, mergeWith, pipe } from '@chakra-ui/utils';

export function extendTheme(...extensions: Array<Dict | ((theme: Dict) => Dict)>): Dict {
  let overrides = [...extensions];
  let baseTheme = extensions[extensions.length - 1];

  if (
    isChakraTheme(baseTheme) &&
    // this ensures backward compatibility
    // previously only `extendTheme(override, baseTheme?)` was allowed
    overrides.length > 1
  ) {
    overrides = overrides.slice(0, overrides.length - 1);
  } else {
    baseTheme = theme;
  }

  return pipe(
    ...overrides.map(
      (extension) => (prevTheme: any) =>
        isFunction(extension)
          ? (extension as any)(prevTheme)
          : mergeThemeOverride(prevTheme, extension)
    )
  )(baseTheme);
}

export function mergeThemeOverride(...overrides: any[]): any {
  return mergeWith({}, ...overrides, mergeThemeCustomizer);
}

function mergeThemeCustomizer(source: unknown, override: unknown, key: string, object: any) {
  if (
    (isFunction(source) || isFunction(override)) &&
    Object.prototype.hasOwnProperty.call(object, key)
  ) {
    return (...args: unknown[]) => {
      const sourceValue = isFunction(source) ? source(...args) : source;

      const overrideValue = isFunction(override) ? override(...args) : override;

      return mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }

  // fallback to default behaviour
  return undefined;
}
