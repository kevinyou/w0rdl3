import { Clue, clueClass } from "./clue";
import { leetToNormal } from "./leetutil";

interface KeyboardProps {
  layout: string;
  letterInfo: Map<string, Clue>;
  onKey: (key: string) => void;
}

export function Keyboard(props: KeyboardProps) {
  const keyboard = props.layout
    .split("-")
    .map((row) =>
      row
        .split("")
        .map((key) => key.replace("B", "Backspace").replace("E", "Enter"))
    );

  return (
    <div className="Game-keyboard" aria-hidden="true">
      {keyboard.map((row, i) => (
        <div key={i} className="Game-keyboard-row">
          {row.map((leetLabel, j) => {
            let className = "Game-keyboard-button";
            const clue = props.letterInfo.get(leetToNormal(leetLabel));
            if (clue !== undefined) {
              className += " " + clueClass(clue);
            }
            if (leetLabel.length > 1) {
              className += " Game-keyboard-button-wide";
            }
            return (
              <button
                tabIndex={-1}
                key={j}
                className={className}
                onClick={() => {
                  props.onKey(leetLabel);
                }}
              >
                {leetLabel.replace("Backspace", "⌫").replace("Enter", "3n+3r")}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
