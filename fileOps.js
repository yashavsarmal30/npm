const fs = require('fs').promises;
const path = require('path');

async function main() {
  try {
    const dir = path.join(__dirname, 'data');            // directory to work in
    const filePath = path.join(dir, 'example.txt');
    const renamedPath = path.join(dir, 'renamed.txt');
    const copyPath = path.join(dir, 'copy.txt');

    // 1) Create directory (if not exists)
    await fs.mkdir(dir, { recursive: true });
    console.log('Created directory:', dir);

    // 2) Write (create) a file
    await fs.writeFile(filePath, 'Hello, Node.js File System!\n', 'utf8');
    console.log('Wrote file:', filePath);

    // 3) Append to the file
    await fs.appendFile(filePath, 'This line was appended using appendFile().\n', 'utf8');
    console.log(' Appended data to file');

    // 4) Read the file
    const content = await fs.readFile(filePath, 'utf8');
    console.log(' File content:\n' + content);

    // 5) Get file info (stat)
    const stats = await fs.stat(filePath);
    console.log(' File stats — size:', stats.size, 'bytes, modified:', stats.mtime);

    // 6) Rename the file
    await fs.rename(filePath, renamedPath);
    console.log(' Renamed file to:', renamedPath);

    // 7) Copy the file
    await fs.copyFile(renamedPath, copyPath);
    console.log(' Copied file to:', copyPath);

    // 8) List files in directory
    const files = await fs.readdir(dir);
    console.log(' Files in directory:', files);

    // 9) Delete the copied and renamed files
    await fs.unlink(copyPath);
    console.log('🗑 Deleted:', copyPath);

    await fs.unlink(renamedPath);
    console.log('🗑 Deleted:', renamedPath);

    // 10) Remove the directory (recursive, force)
    await fs.rm(dir, { recursive: true, force: true });
    console.log('🧹 Removed directory:', dir);

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();
