"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../src/config/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🔄 Seeding admin user...");
        if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
            console.error("❌ Missing admin email or password in environment variables");
            return;
        }
        console.log("email:", process.env.ADMIN_EMAIL);
        console.log("password:", bcrypt_1.default.hashSync(process.env.ADMIN_PASSWORD, 10));
        /*
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
            */
    });
}
main()
    .catch((e) => {
    console.error("❌ Error seeding admin:", e);
    process.exit(1);
})
    .finally(() => {
    database_1.default.$disconnect();
});
