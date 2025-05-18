import { PinataSDK } from "pinata";

export const pinata = new PinataSDK({
  pinataJwt: import.meta.env.VITE_JWT_SECRET,
  pinataGateway: import.meta.env.VITE_GATEWAY_URL,
});

export async function getPreSignedURL() {
  return await pinata.upload.public.createSignedURL({
    expires: 3600, // Last for 60 seconds
  });
}
