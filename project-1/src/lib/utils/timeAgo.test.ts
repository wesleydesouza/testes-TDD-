import { timeAgo } from "./index";
import { describe, expect, test } from "vitest";

describe("timeAgo", () => {
  const fixedDate = new Date("2025-02-15T12:00:00Z");
  vi.setSystemTime(fixedDate);

  test("deve retornar 'Hoje' para a data de hoje", () => {
    expect(timeAgo("2025-02-15T10:00:00Z")).toBe("Hoje");
  });

  test("deve retornar '1 dia atrás' para uma data de ontem", () => {
    expect(timeAgo("2025-02-14T10:00:00Z")).toBe("1 dia atrás");
  });

  test("deve retornar '5 dias atrás' para uma data de 5 dias atrás", () => {
    expect(timeAgo("2025-02-10T10:00:00Z")).toBe("5 dias atrás");
  });

  test("deve retornar '1 mês atrás' para uma data de 30 dias atrás", () => {
    expect(timeAgo("2025-01-16T10:00:00Z")).toBe("1 mês atrás");
  });

  test("deve retornar '2 meses atrás' para uma data de 60 dias atrás", () => {
    expect(timeAgo("2024-12-17T10:00:00Z")).toBe("2 meses atrás");
  });

  test("deve retornar '1 ano atrás' para uma data de 1 ano atrás", () => {
    expect(timeAgo("2024-02-15T10:00:00Z")).toBe("1 ano atrás");
  });

  test("deve retornar '2 anos atrás' para uma data de 2 anos atrás", () => {
    expect(timeAgo("2023-02-15T10:00:00Z")).toBe("2 anos atrás");
  });

  test("deve lidar corretamente com datas futuras (retornar 'Hoje')", () => {
    expect(timeAgo("2025-02-16T10:00:00Z")).toBe("Hoje");
  });

  test("deve retornar 'Hoje' para uma string vazia ou inválida", () => {
    expect(timeAgo("")).toBe("Hoje");
    expect(timeAgo("data-invalida")).toBe("Hoje");
  });

  test("deve retornar 'Hoje' caso a data seja inválida", () => {
    expect(timeAgo("9999-99-99")).toBe("Hoje");
  });
});
