import bcrypt from 'bcryptjs';

const saltRounds = 13;
const password = 'Hunter12';

const hashedPassword = '$2b$12$d0cdr2f8uu.498Lw0pIzs.dqBWHlNuH8a4/W4F3evB6qeFeIxTszC';

const passwordHash = await bcrypt.hash(password, saltRounds);

console.log(passwordHash);

const isSame = await bcrypt.compare(password, hashedPassword);
console.log(isSame);
