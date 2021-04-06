import { loremIpsum } from "lorem-ipsum";

export const Description = () =>
    loremIpsum({
    count: 20, // Number of "words", "sentences", or "paragraphs"
    format: "plain", // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 7, // Max. number of sentences per paragarph.
    random: Math.random, // A PRNG function
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 40, // Max. number of words per sentence.
    suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "sentences", // paragraph(s), "sentence(s)", or "word(s)"
    });

export default Description;
