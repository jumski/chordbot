import tonal from 'tonal';

export function buildChromaticNotes(octave) {
  const notesRange = `C${octave}, C${octave + 2}`;

  return tonal.range.chromatic(notesRange);
}

export function scaleNotes({ scale, rootNote }) {
  const scaleNotes = tonal.scale.get(scale, rootNote);

  return scaleNotes.map(tonal.note.simplify);
}

export function chordNotes({ chord, rootNote }) {
  const chordNotes = tonal.chord.get(chord, rootNote);

  return chordNotes.map(tonal.note.simplify);
}
