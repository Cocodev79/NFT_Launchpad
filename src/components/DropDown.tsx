import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: string) => void;
  value: string;
}

export const DropdownSelect: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        className="flex cursor-pointer items-center gap-x-1"
        onClick={toggleDropdown}
      >
        <span className="SortBy text-[#17ccc6] text-[11px] font-light font-['Londrina Solid']">
          {options.find((option) => option.value === value)?.label || "Sort By"}
        </span>
        <svg
          className={`w-2 h-2 text-[#17ccc6] transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute bg-cyan-700 w-max left-0 z-10 mt-2  px-2">
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleSelect(option.value)}
                className={classNames(
                  " text-[#17ccc6] text-[11px] font-light font-['Londrina Solid']",
                  value === option.value && " text-white"
                )}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
