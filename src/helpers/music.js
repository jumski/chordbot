import tonal from 'tonal';

export function buildChromaticNotes(octave, octavesCount) {
  const notesRange = `C${octave}, C${octave + octavesCount}`;

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
