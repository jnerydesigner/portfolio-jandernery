export function substitutionStrinHW(h: string, w: string, svg: string) {
  let str = svg;

  let searchStringHeight = 'height="';
  let searchStringWidth = 'width="';

  let startPositionHeight = str.indexOf(searchStringHeight);

  let startPositionWidth = -1;
  let tempPosition = 0;
  while (tempPosition !== -1) {
    tempPosition = str.indexOf(searchStringWidth, tempPosition + 1);
    if (str.substring(tempPosition - 7, tempPosition) !== "stroke-") {
      startPositionWidth = tempPosition;
      break;
    }
  }

  if (startPositionHeight !== -1 && startPositionWidth !== -1) {
    let endPositionHeight = str.indexOf(
      '"',
      startPositionHeight + searchStringHeight.length
    );
    let endPositionWidth = str.indexOf(
      '"',
      startPositionWidth + searchStringWidth.length
    );

    if (endPositionHeight !== -1 && endPositionWidth !== -1) {
      let foundStringHeight = str.substring(
        startPositionHeight,
        endPositionHeight + 1
      );
      let foundStringWidth = str.substring(
        startPositionWidth,
        endPositionWidth + 1
      );

      let replacementStringHeight = `height="${h}"`;
      let replacementStringWidth = `width="${w}"`;
      str = str.replace(foundStringHeight, replacementStringHeight);
      str = str.replace(foundStringWidth, replacementStringWidth);
    } else {
      console.log(`Não foi encontrada uma segunda aspas (")`);
    }
  } else {
    console.log(`A string '${searchStringHeight}' não foi encontrada`);
    console.log(`A string '${searchStringWidth}' não foi encontrada`);
  }

  return str;
}
