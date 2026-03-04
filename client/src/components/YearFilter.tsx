/**
 * YearFilter — ThiagoFlix
 * Design: Abas de filtro por ano estilo Netflix
 * Permite alternar entre anos (2025, 2026, etc.)
 */

import { motion } from "framer-motion";

interface YearFilterProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function YearFilter({ years, selectedYear, onYearChange }: YearFilterProps) {
  return (
    <motion.div
      className="year-filter-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="year-filter-tabs">
        {years.map((year) => (
          <motion.button
            key={year}
            className={`year-filter-tab ${selectedYear === year ? "active" : ""}`}
            onClick={() => onYearChange(year)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="year-filter-label">{year}</span>
            {selectedYear === year && (
              <motion.div
                className="year-filter-underline"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
