export interface LeadInput {
  name: string;
  phone: string;
  consent: boolean;
}

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

export function validateLead(input: LeadInput): LeadErrors {
  const errors: LeadErrors = {};

  if (!input.name.trim()) {
    errors.name = "Введите имя";
  }

  if (input.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Введите корректный телефон";
  }

  if (!input.consent) {
    errors.consent = "Подтвердите согласие";
  }

  return errors;
}
