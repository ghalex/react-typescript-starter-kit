import { createDomain } from "effector";
import { User } from "models";
import { LoginData } from "types";

const domain = createDomain("auth");

// effects
// prettier-ignore
const login = domain
  .effect<LoginData, User, any>("login")
  .use(data => Promise.resolve(new User({ id: 1, profile: { email: "ghalex@gmail.com" }})));

// stores
export const $user = domain.store<User | null>(null);
export const $busy = domain.store(false);

// prettier-ignore
$user
  .on(login, () => null)
  .on(login.done, (state, { result: user }) => user)

$busy
  .on(login, () => true)
  .on(login.done, () => false)
  .on(login.fail, () => false);

// exports
export default {
  $user,
  $busy,
  login
};
