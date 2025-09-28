import app from './app';
import { sequelize } from './config/database';

const PORT = Number(process.env.PORT || 3001);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to DB:', error);
    process.exit(1);
  }
})();
