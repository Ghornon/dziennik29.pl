import { useState } from 'react';

const replaceValues: Record<string, string> = {
  'a': '⏇', 'b': '⏃', 'c': '⊬', 'd': '⏅', 'e': '⎎',
  'f': '⏧', 'g': '§',  'h': '⍜', 'i': '☊', 'j': '⎐',
  'k': '⟟', 'l': '⏚', 'm': '⍀', 'n': '☌', 'o': '☍',
  'p': '⏍', 'q': '⟊', 'r': '⏌', 's': '⍙', 't': '⋔',
  'u': '⏙', 'v': '⌇', 'w': '⌰', 'x': '⌖', 'y': '⋏',
  'z': '丂', '1': '⋉', '2': '⟒', '3': '⊑', '4': '⎒',
  '5': '⌿', '6': '⎅', '7': '⏁', '8': '⏋', '9': '⍾',
  '0': '⎍',
};

function translate(input: string): string {
  let result = input;
  for (const [key, val] of Object.entries(replaceValues)) {
    result = result.replace(new RegExp(key, 'gim'), val);
  }
  return result;
}

const Machina = () => {
  const [input, setInput] = useState('');

  return (
    <div className="machina">
      <div className="machina-screen">
        <div className="machina-col">
          <div className="machina-group">
            <label className="machina-label" htmlFor="machina-input">Insert Text:</label>
            <input
              id="machina-input"
              type="text"
              className="machina-field"
              value={input}
              onChange={e => setInput(e.target.value)}
              maxLength={20}
              autoFocus
            />
          </div>
          <div className="machina-group">
            <label className="machina-label" htmlFor="machina-output">Output:</label>
            <textarea
              id="machina-output"
              className="machina-field"
              readOnly
              rows={1}
              value={translate(input)}
            />
          </div>
        </div>
      </div>
      <div className="machina-scanlines" />
      <div className="machina-glow" />
      <div className="machina-frame" />
    </div>
  );
};

export default Machina;
