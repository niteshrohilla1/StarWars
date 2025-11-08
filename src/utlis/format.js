export function cmToMeters(height) {
  if (height === "unknown") return height;
  return (Number(height) / 100).toFixed(2) + " m";
}

export function formatDate() {
  const date = new Date();
  return date.toLocaleDateString("en-GB").split("/").join("-");
}

export function safeMass(mass) {
  if (mass === "unknown") return mass;
  return mass + " kg";
}
