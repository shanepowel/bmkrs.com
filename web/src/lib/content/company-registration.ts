const PLACEHOLDER_COMPANY_NUMBER = "12345678";

export function isPlaceholderCompanyNumber(companyNumber?: string | null): boolean {
  if (!companyNumber?.trim()) return true;
  if (companyNumber.trim() === PLACEHOLDER_COMPANY_NUMBER) return true;
  return /placeholder|replace before launch|\[company/i.test(companyNumber);
}

export function isPlaceholderRegisteredAddress(address?: string | null): boolean {
  if (!address?.trim()) return true;
  return /placeholder|replace before launch|\[address/i.test(address);
}

export function publicCompanyNumber(companyNumber?: string | null): string | undefined {
  return isPlaceholderCompanyNumber(companyNumber) ? undefined : companyNumber!.trim();
}

export function publicRegisteredAddress(address?: string | null): string | undefined {
  return isPlaceholderRegisteredAddress(address) ? undefined : address!.trim();
}
