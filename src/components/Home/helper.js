function matchQuery(query, statement) {
  if (query.startsWith('"') && query.endsWith('"')) {
    // Query is enclosed in double quotes, match exactly
    const exactQuery = query.slice(1, -1);
    return statement.toLowerCase().includes(exactQuery.toLowerCase());
  } else {
    // Query is not enclosed in double quotes, match any sequence
    const words = query.split(" ").map((word) => word.toLowerCase());
    const statementWords = statement.toLowerCase().split(" ");

    for (let i = 0; i <= statementWords.length - words.length; i++) {
      const segment = statementWords.slice(i, i + words.length).join(" ");
      if (words.every((word, index) => segment.includes(word))) {
        return true;
      }
    }

    return false;
  }
}
function sortByProperty(array, property) {
  return array.sort((a, b) => {
    if (property === "name") {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    } else if (property === "dateLastEdited") {
      const dateA = new Date(a.dateLastEdited);
      const dateB = new Date(b.dateLastEdited);
      return dateA - dateB;
    }
  });
}
export { matchQuery, sortByProperty };
