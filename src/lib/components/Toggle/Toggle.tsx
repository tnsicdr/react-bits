import style from "./Toggle.module.css";

interface ToggleProps {
  className?: string;
  name?: string;
  isToggled?: boolean;
  onToggle?: (value: boolean) => void;
}

export function Toggle({
  className,
  name,
  isToggled = false,
  onToggle,
}: ToggleProps) {
  return (
    <div
      className={className}
      data-testid={name ? `${name}-toggle-input` : "toggle-input"}
      onClick={() => onToggle?.(!isToggled)}
    >
      <input
        className={style.hiddenInput}
        name={name}
        type="checkbox"
        checked={isToggled}
        readOnly
      />
      {isToggled ? "On" : "Off"}
    </div>
  );
}

export default Toggle;
