function moveFileToAnotherFolder(fileId, destinationFolderId) {
  var file = Drive.Files.get(fileId, {supportsAllDrives: true});
  Drive.Files.patch(file, fileId, {
    removeParents: file.parents.map(function(f) { return f.id; }),
    addParents: [destinationFolderId],
    supportsAllDrives: true
  });
}
