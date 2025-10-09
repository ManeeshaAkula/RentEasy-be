import app from './app';
import { sequelize } from './config/database';
// import './models';

const PORT = Number(process.env.PORT || 3001);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ });
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to DB:', error);
    process.exit(1);
  }
})();
