import { describe, it, expect } from "vitest";
import { formatTimeToHHMM } from "./index";

describe("formatTimeToHHMM", () => {
  it("deve formatar corretamente um horário no formato H:M para HH:MM", () => {
    expect(formatTimeToHHMM("9:5")).toBe("09:05");
    expect(formatTimeToHHMM("1:2")).toBe("01:02");
  });

  it("deve manter um horário já formatado no formato HH:MM", () => {
    expect(formatTimeToHHMM("12:30")).toBe("12:30");
    expect(formatTimeToHHMM("09:45")).toBe("09:45");
  });

  it("deve retornar a entrada original caso seja uma string vazia", () => {
    expect(formatTimeToHHMM("")).toBe("");
  });
});
