function filterAcceptedSpeakers({ state, confirmed }) {
  return state === "accepted" && confirmed;
}

const goodFields = [
  "name",
  "avatar",
  "bio",
  "url",
  "organization",
  "title",
  "abstract",
  "description",
  "twitter",
];
function santizeFields(speaker) {
  return goodFields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: speaker[field],
    }),
    {}
  );
}

async function main() {
  const json = require(filePath);

  if (!json) {
    console.log("give me a file");
  }

  const output = json.filter(filterAcceptedSpeakers).map(santizeFields);

  console.log(JSON.stringify(output, null, 2));
}

const [_node, _file, filePath] = process.argv;
main(filePath).catch((err) => {
  console.error(err);
  process.exit(1);
});
