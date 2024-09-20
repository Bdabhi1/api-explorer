import { apiBase } from "../utils/env";
import { IProviderDetailsResponse } from "../utils/types";

export async function fetchProviderList(): Promise<{ data: string[] }> {
  try {
    const response = await fetch(`${apiBase}/providers.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchProviderDetail(provider: string) {
  try {
    const response = await fetch(`${apiBase}/${provider}.json`);
    const result: IProviderDetailsResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch provider:", error);
  }
}
