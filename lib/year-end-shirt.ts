// Shared by the Year End Shirt page, its order form, and app/api/year-end-shirt/route.ts.
// Kept apart from lib/constants.ts so client components don't pull in the server-only webhook URL.

export const SHIRT_PRICE = 500;
export const SHIRT_MAX_QUANTITY = 10;
export const SHIRT_WEAR_DAY = "Day 3 of the Year End Getaway, Dec. 14, 2026";

export const SHIRT_SIZES: Record<string, string[]> = {
  "Men's Cut": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  "Women's Cut": ["XS", "S", "M", "L", "XL", "XXL"],
};

// The first option needs no arrangement; the others mean coordinating with Jonathan.
export const PICKUP_OPTIONS = [
  "I will get it at the year-end party",
  "Pick up at Jonathan's place",
  "Meet up somewhere down the road",
  "Ship it via LBC, J&T, etc.",
];

export const SHIRT_MAX_FILE_BYTES = 5 * 1024 * 1024;
export const SHIRT_RECEIPT_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export const JONATHAN_EMAIL = "jonathan@esteam.work";
export const SIZE_CHART_SRC = "/year-end-shirt/size-chart.jpg";
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
