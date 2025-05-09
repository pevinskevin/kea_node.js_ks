import bcrypt from 'bcryptjs';

const saltRounds = 13;
const password = 'test';

const hashedPassword = '$2b$13$imXZtYBBHrGYLJqhOpM5/eFi2VK1fAjZ1.PJ3F/1Bp7xd7koE8wDe';

const passwordHash = await bcrypt.hash(password, saltRounds);

console.log(passwordHash);

const isSame = await bcrypt.compare(password, hashedPassword);
console.log(isSame);
