import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key when header is valid", () => {
    const headers = {
      authorization: "ApiKey abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("abc123");
  });

  test("returns null if authorization header missing", () => {
    const headers = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null if authorization format is wrong", () => {
    const headers = {
      authorization: "Bearer abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  test("returns null if key missing after ApiKey", () => {
    const headers = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });
});
