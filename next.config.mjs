/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Autorise le chargement d'images distantes optimisées si tu en ajoutes
    // (ex: avatar hébergé ailleurs). Ajoute ici les domaines au besoin.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
