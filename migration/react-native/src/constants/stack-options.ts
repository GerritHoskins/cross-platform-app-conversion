export function stackOptions(dark: boolean) {
  const background = dark ? '#101014' : '#f5f5f7';
  const surface = dark ? '#1c1c22' : '#ffffff';
  const text = dark ? '#f2f2f5' : '#111114';

  return {
    headerStyle: { backgroundColor: surface },
    headerTintColor: text,
    headerTitleStyle: { color: text },
    contentStyle: { backgroundColor: background },
  };
}
