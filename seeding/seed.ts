import prisma from "../src/config/database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("🔄 Seeding admin user...");

  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    console.error(
      "❌ Missing admin email or password in environment variables"
    );
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  const existingAdmin = await prisma.user.findUnique({
    where: { usuEmail: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        usuName: "Admin",
        usuEmail: adminEmail,
        usuPassword: hashedPassword,
        usuRole: "admin",
      },
    });
    console.log("✅ Admin user created");
  } else {
    console.log("ℹ️ Admin user already exists");
  }
}

main()
  .catch((e) => {
    console.error("❌ Error seeding admin:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
