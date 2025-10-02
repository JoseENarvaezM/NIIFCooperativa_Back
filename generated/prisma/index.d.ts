
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model formactivosfijos
 * 
 */
export type formactivosfijos = $Result.DefaultSelection<Prisma.$formactivosfijosPayload>
/**
 * Model formcaratula
 * 
 */
export type formcaratula = $Result.DefaultSelection<Prisma.$formcaratulaPayload>
/**
 * Model formdetallerenglones
 * 
 */
export type formdetallerenglones = $Result.DefaultSelection<Prisma.$formdetallerenglonesPayload>
/**
 * Model formesfpatrimonio
 * 
 */
export type formesfpatrimonio = $Result.DefaultSelection<Prisma.$formesfpatrimonioPayload>
/**
 * Model formimpuestodiferido
 * 
 */
export type formimpuestodiferido = $Result.DefaultSelection<Prisma.$formimpuestodiferidoPayload>
/**
 * Model formingresosfancturacion
 * 
 */
export type formingresosfancturacion = $Result.DefaultSelection<Prisma.$formingresosfancturacionPayload>
/**
 * Model formr110
 * 
 */
export type formr110 = $Result.DefaultSelection<Prisma.$formr110Payload>
/**
 * Model formrentaliquida
 * 
 */
export type formrentaliquida = $Result.DefaultSelection<Prisma.$formrentaliquidaPayload>
/**
 * Model formresumenesferi
 * 
 */
export type formresumenesferi = $Result.DefaultSelection<Prisma.$formresumenesferiPayload>
/**
 * Model report
 * 
 */
export type report = $Result.DefaultSelection<Prisma.$reportPayload>
/**
 * Model room
 * 
 */
export type room = $Result.DefaultSelection<Prisma.$roomPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_usuRole: {
  admin: 'admin',
  professor: 'professor'
};

export type user_usuRole = (typeof user_usuRole)[keyof typeof user_usuRole]


export const room_roomStatus: {
  open: 'open',
  closed: 'closed'
};

export type room_roomStatus = (typeof room_roomStatus)[keyof typeof room_roomStatus]

}

export type user_usuRole = $Enums.user_usuRole

export const user_usuRole: typeof $Enums.user_usuRole

export type room_roomStatus = $Enums.room_roomStatus

export const room_roomStatus: typeof $Enums.room_roomStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Formactivosfijos
 * const formactivosfijos = await prisma.formactivosfijos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Formactivosfijos
   * const formactivosfijos = await prisma.formactivosfijos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.formactivosfijos`: Exposes CRUD operations for the **formactivosfijos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formactivosfijos
    * const formactivosfijos = await prisma.formactivosfijos.findMany()
    * ```
    */
  get formactivosfijos(): Prisma.formactivosfijosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formcaratula`: Exposes CRUD operations for the **formcaratula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formcaratulas
    * const formcaratulas = await prisma.formcaratula.findMany()
    * ```
    */
  get formcaratula(): Prisma.formcaratulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formdetallerenglones`: Exposes CRUD operations for the **formdetallerenglones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formdetallerenglones
    * const formdetallerenglones = await prisma.formdetallerenglones.findMany()
    * ```
    */
  get formdetallerenglones(): Prisma.formdetallerenglonesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formesfpatrimonio`: Exposes CRUD operations for the **formesfpatrimonio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formesfpatrimonios
    * const formesfpatrimonios = await prisma.formesfpatrimonio.findMany()
    * ```
    */
  get formesfpatrimonio(): Prisma.formesfpatrimonioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formimpuestodiferido`: Exposes CRUD operations for the **formimpuestodiferido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formimpuestodiferidos
    * const formimpuestodiferidos = await prisma.formimpuestodiferido.findMany()
    * ```
    */
  get formimpuestodiferido(): Prisma.formimpuestodiferidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formingresosfancturacion`: Exposes CRUD operations for the **formingresosfancturacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formingresosfancturacions
    * const formingresosfancturacions = await prisma.formingresosfancturacion.findMany()
    * ```
    */
  get formingresosfancturacion(): Prisma.formingresosfancturacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formr110`: Exposes CRUD operations for the **formr110** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formr110s
    * const formr110s = await prisma.formr110.findMany()
    * ```
    */
  get formr110(): Prisma.formr110Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formrentaliquida`: Exposes CRUD operations for the **formrentaliquida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formrentaliquidas
    * const formrentaliquidas = await prisma.formrentaliquida.findMany()
    * ```
    */
  get formrentaliquida(): Prisma.formrentaliquidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formresumenesferi`: Exposes CRUD operations for the **formresumenesferi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formresumenesferis
    * const formresumenesferis = await prisma.formresumenesferi.findMany()
    * ```
    */
  get formresumenesferi(): Prisma.formresumenesferiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    formactivosfijos: 'formactivosfijos',
    formcaratula: 'formcaratula',
    formdetallerenglones: 'formdetallerenglones',
    formesfpatrimonio: 'formesfpatrimonio',
    formimpuestodiferido: 'formimpuestodiferido',
    formingresosfancturacion: 'formingresosfancturacion',
    formr110: 'formr110',
    formrentaliquida: 'formrentaliquida',
    formresumenesferi: 'formresumenesferi',
    report: 'report',
    room: 'room',
    student: 'student',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "formactivosfijos" | "formcaratula" | "formdetallerenglones" | "formesfpatrimonio" | "formimpuestodiferido" | "formingresosfancturacion" | "formr110" | "formrentaliquida" | "formresumenesferi" | "report" | "room" | "student" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      formactivosfijos: {
        payload: Prisma.$formactivosfijosPayload<ExtArgs>
        fields: Prisma.formactivosfijosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formactivosfijosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formactivosfijosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>
          }
          findFirst: {
            args: Prisma.formactivosfijosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formactivosfijosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>
          }
          findMany: {
            args: Prisma.formactivosfijosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>[]
          }
          create: {
            args: Prisma.formactivosfijosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>
          }
          createMany: {
            args: Prisma.formactivosfijosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formactivosfijosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>
          }
          update: {
            args: Prisma.formactivosfijosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>
          }
          deleteMany: {
            args: Prisma.formactivosfijosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formactivosfijosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formactivosfijosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formactivosfijosPayload>
          }
          aggregate: {
            args: Prisma.FormactivosfijosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormactivosfijos>
          }
          groupBy: {
            args: Prisma.formactivosfijosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormactivosfijosGroupByOutputType>[]
          }
          count: {
            args: Prisma.formactivosfijosCountArgs<ExtArgs>
            result: $Utils.Optional<FormactivosfijosCountAggregateOutputType> | number
          }
        }
      }
      formcaratula: {
        payload: Prisma.$formcaratulaPayload<ExtArgs>
        fields: Prisma.formcaratulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formcaratulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formcaratulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>
          }
          findFirst: {
            args: Prisma.formcaratulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formcaratulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>
          }
          findMany: {
            args: Prisma.formcaratulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>[]
          }
          create: {
            args: Prisma.formcaratulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>
          }
          createMany: {
            args: Prisma.formcaratulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formcaratulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>
          }
          update: {
            args: Prisma.formcaratulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>
          }
          deleteMany: {
            args: Prisma.formcaratulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formcaratulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formcaratulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formcaratulaPayload>
          }
          aggregate: {
            args: Prisma.FormcaratulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormcaratula>
          }
          groupBy: {
            args: Prisma.formcaratulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormcaratulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.formcaratulaCountArgs<ExtArgs>
            result: $Utils.Optional<FormcaratulaCountAggregateOutputType> | number
          }
        }
      }
      formdetallerenglones: {
        payload: Prisma.$formdetallerenglonesPayload<ExtArgs>
        fields: Prisma.formdetallerenglonesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formdetallerenglonesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formdetallerenglonesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>
          }
          findFirst: {
            args: Prisma.formdetallerenglonesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formdetallerenglonesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>
          }
          findMany: {
            args: Prisma.formdetallerenglonesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>[]
          }
          create: {
            args: Prisma.formdetallerenglonesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>
          }
          createMany: {
            args: Prisma.formdetallerenglonesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formdetallerenglonesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>
          }
          update: {
            args: Prisma.formdetallerenglonesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>
          }
          deleteMany: {
            args: Prisma.formdetallerenglonesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formdetallerenglonesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formdetallerenglonesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formdetallerenglonesPayload>
          }
          aggregate: {
            args: Prisma.FormdetallerenglonesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormdetallerenglones>
          }
          groupBy: {
            args: Prisma.formdetallerenglonesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormdetallerenglonesGroupByOutputType>[]
          }
          count: {
            args: Prisma.formdetallerenglonesCountArgs<ExtArgs>
            result: $Utils.Optional<FormdetallerenglonesCountAggregateOutputType> | number
          }
        }
      }
      formesfpatrimonio: {
        payload: Prisma.$formesfpatrimonioPayload<ExtArgs>
        fields: Prisma.formesfpatrimonioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formesfpatrimonioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formesfpatrimonioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>
          }
          findFirst: {
            args: Prisma.formesfpatrimonioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formesfpatrimonioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>
          }
          findMany: {
            args: Prisma.formesfpatrimonioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>[]
          }
          create: {
            args: Prisma.formesfpatrimonioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>
          }
          createMany: {
            args: Prisma.formesfpatrimonioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formesfpatrimonioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>
          }
          update: {
            args: Prisma.formesfpatrimonioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>
          }
          deleteMany: {
            args: Prisma.formesfpatrimonioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formesfpatrimonioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formesfpatrimonioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formesfpatrimonioPayload>
          }
          aggregate: {
            args: Prisma.FormesfpatrimonioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormesfpatrimonio>
          }
          groupBy: {
            args: Prisma.formesfpatrimonioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormesfpatrimonioGroupByOutputType>[]
          }
          count: {
            args: Prisma.formesfpatrimonioCountArgs<ExtArgs>
            result: $Utils.Optional<FormesfpatrimonioCountAggregateOutputType> | number
          }
        }
      }
      formimpuestodiferido: {
        payload: Prisma.$formimpuestodiferidoPayload<ExtArgs>
        fields: Prisma.formimpuestodiferidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formimpuestodiferidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formimpuestodiferidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>
          }
          findFirst: {
            args: Prisma.formimpuestodiferidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formimpuestodiferidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>
          }
          findMany: {
            args: Prisma.formimpuestodiferidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>[]
          }
          create: {
            args: Prisma.formimpuestodiferidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>
          }
          createMany: {
            args: Prisma.formimpuestodiferidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formimpuestodiferidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>
          }
          update: {
            args: Prisma.formimpuestodiferidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>
          }
          deleteMany: {
            args: Prisma.formimpuestodiferidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formimpuestodiferidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formimpuestodiferidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formimpuestodiferidoPayload>
          }
          aggregate: {
            args: Prisma.FormimpuestodiferidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormimpuestodiferido>
          }
          groupBy: {
            args: Prisma.formimpuestodiferidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormimpuestodiferidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.formimpuestodiferidoCountArgs<ExtArgs>
            result: $Utils.Optional<FormimpuestodiferidoCountAggregateOutputType> | number
          }
        }
      }
      formingresosfancturacion: {
        payload: Prisma.$formingresosfancturacionPayload<ExtArgs>
        fields: Prisma.formingresosfancturacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formingresosfancturacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formingresosfancturacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>
          }
          findFirst: {
            args: Prisma.formingresosfancturacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formingresosfancturacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>
          }
          findMany: {
            args: Prisma.formingresosfancturacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>[]
          }
          create: {
            args: Prisma.formingresosfancturacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>
          }
          createMany: {
            args: Prisma.formingresosfancturacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formingresosfancturacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>
          }
          update: {
            args: Prisma.formingresosfancturacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>
          }
          deleteMany: {
            args: Prisma.formingresosfancturacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formingresosfancturacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formingresosfancturacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formingresosfancturacionPayload>
          }
          aggregate: {
            args: Prisma.FormingresosfancturacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormingresosfancturacion>
          }
          groupBy: {
            args: Prisma.formingresosfancturacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormingresosfancturacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.formingresosfancturacionCountArgs<ExtArgs>
            result: $Utils.Optional<FormingresosfancturacionCountAggregateOutputType> | number
          }
        }
      }
      formr110: {
        payload: Prisma.$formr110Payload<ExtArgs>
        fields: Prisma.formr110FieldRefs
        operations: {
          findUnique: {
            args: Prisma.formr110FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formr110FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>
          }
          findFirst: {
            args: Prisma.formr110FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formr110FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>
          }
          findMany: {
            args: Prisma.formr110FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>[]
          }
          create: {
            args: Prisma.formr110CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>
          }
          createMany: {
            args: Prisma.formr110CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formr110DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>
          }
          update: {
            args: Prisma.formr110UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>
          }
          deleteMany: {
            args: Prisma.formr110DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formr110UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formr110UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formr110Payload>
          }
          aggregate: {
            args: Prisma.Formr110AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormr110>
          }
          groupBy: {
            args: Prisma.formr110GroupByArgs<ExtArgs>
            result: $Utils.Optional<Formr110GroupByOutputType>[]
          }
          count: {
            args: Prisma.formr110CountArgs<ExtArgs>
            result: $Utils.Optional<Formr110CountAggregateOutputType> | number
          }
        }
      }
      formrentaliquida: {
        payload: Prisma.$formrentaliquidaPayload<ExtArgs>
        fields: Prisma.formrentaliquidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formrentaliquidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formrentaliquidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>
          }
          findFirst: {
            args: Prisma.formrentaliquidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formrentaliquidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>
          }
          findMany: {
            args: Prisma.formrentaliquidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>[]
          }
          create: {
            args: Prisma.formrentaliquidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>
          }
          createMany: {
            args: Prisma.formrentaliquidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formrentaliquidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>
          }
          update: {
            args: Prisma.formrentaliquidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>
          }
          deleteMany: {
            args: Prisma.formrentaliquidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formrentaliquidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formrentaliquidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formrentaliquidaPayload>
          }
          aggregate: {
            args: Prisma.FormrentaliquidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormrentaliquida>
          }
          groupBy: {
            args: Prisma.formrentaliquidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormrentaliquidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.formrentaliquidaCountArgs<ExtArgs>
            result: $Utils.Optional<FormrentaliquidaCountAggregateOutputType> | number
          }
        }
      }
      formresumenesferi: {
        payload: Prisma.$formresumenesferiPayload<ExtArgs>
        fields: Prisma.formresumenesferiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formresumenesferiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formresumenesferiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>
          }
          findFirst: {
            args: Prisma.formresumenesferiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formresumenesferiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>
          }
          findMany: {
            args: Prisma.formresumenesferiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>[]
          }
          create: {
            args: Prisma.formresumenesferiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>
          }
          createMany: {
            args: Prisma.formresumenesferiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formresumenesferiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>
          }
          update: {
            args: Prisma.formresumenesferiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>
          }
          deleteMany: {
            args: Prisma.formresumenesferiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formresumenesferiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formresumenesferiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formresumenesferiPayload>
          }
          aggregate: {
            args: Prisma.FormresumenesferiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormresumenesferi>
          }
          groupBy: {
            args: Prisma.formresumenesferiGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormresumenesferiGroupByOutputType>[]
          }
          count: {
            args: Prisma.formresumenesferiCountArgs<ExtArgs>
            result: $Utils.Optional<FormresumenesferiCountAggregateOutputType> | number
          }
        }
      }
      report: {
        payload: Prisma.$reportPayload<ExtArgs>
        fields: Prisma.reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findFirst: {
            args: Prisma.reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findMany: {
            args: Prisma.reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          create: {
            args: Prisma.reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          createMany: {
            args: Prisma.reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          update: {
            args: Prisma.reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          deleteMany: {
            args: Prisma.reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      room: {
        payload: Prisma.$roomPayload<ExtArgs>
        fields: Prisma.roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findFirst: {
            args: Prisma.roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findMany: {
            args: Prisma.roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          create: {
            args: Prisma.roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          createMany: {
            args: Prisma.roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          update: {
            args: Prisma.roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          deleteMany: {
            args: Prisma.roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    formactivosfijos?: formactivosfijosOmit
    formcaratula?: formcaratulaOmit
    formdetallerenglones?: formdetallerenglonesOmit
    formesfpatrimonio?: formesfpatrimonioOmit
    formimpuestodiferido?: formimpuestodiferidoOmit
    formingresosfancturacion?: formingresosfancturacionOmit
    formr110?: formr110Omit
    formrentaliquida?: formrentaliquidaOmit
    formresumenesferi?: formresumenesferiOmit
    report?: reportOmit
    room?: roomOmit
    student?: studentOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormactivosfijosCountOutputType
   */

  export type FormactivosfijosCountOutputType = {
    report: number
  }

  export type FormactivosfijosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormactivosfijosCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormactivosfijosCountOutputType without action
   */
  export type FormactivosfijosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormactivosfijosCountOutputType
     */
    select?: FormactivosfijosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormactivosfijosCountOutputType without action
   */
  export type FormactivosfijosCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormcaratulaCountOutputType
   */

  export type FormcaratulaCountOutputType = {
    report: number
  }

  export type FormcaratulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormcaratulaCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormcaratulaCountOutputType without action
   */
  export type FormcaratulaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormcaratulaCountOutputType
     */
    select?: FormcaratulaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormcaratulaCountOutputType without action
   */
  export type FormcaratulaCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormdetallerenglonesCountOutputType
   */

  export type FormdetallerenglonesCountOutputType = {
    report: number
  }

  export type FormdetallerenglonesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormdetallerenglonesCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormdetallerenglonesCountOutputType without action
   */
  export type FormdetallerenglonesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormdetallerenglonesCountOutputType
     */
    select?: FormdetallerenglonesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormdetallerenglonesCountOutputType without action
   */
  export type FormdetallerenglonesCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormesfpatrimonioCountOutputType
   */

  export type FormesfpatrimonioCountOutputType = {
    report: number
  }

  export type FormesfpatrimonioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormesfpatrimonioCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormesfpatrimonioCountOutputType without action
   */
  export type FormesfpatrimonioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormesfpatrimonioCountOutputType
     */
    select?: FormesfpatrimonioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormesfpatrimonioCountOutputType without action
   */
  export type FormesfpatrimonioCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormimpuestodiferidoCountOutputType
   */

  export type FormimpuestodiferidoCountOutputType = {
    report: number
  }

  export type FormimpuestodiferidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormimpuestodiferidoCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormimpuestodiferidoCountOutputType without action
   */
  export type FormimpuestodiferidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormimpuestodiferidoCountOutputType
     */
    select?: FormimpuestodiferidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormimpuestodiferidoCountOutputType without action
   */
  export type FormimpuestodiferidoCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormingresosfancturacionCountOutputType
   */

  export type FormingresosfancturacionCountOutputType = {
    report: number
  }

  export type FormingresosfancturacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormingresosfancturacionCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormingresosfancturacionCountOutputType without action
   */
  export type FormingresosfancturacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormingresosfancturacionCountOutputType
     */
    select?: FormingresosfancturacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormingresosfancturacionCountOutputType without action
   */
  export type FormingresosfancturacionCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type Formr110CountOutputType
   */

  export type Formr110CountOutputType = {
    report: number
  }

  export type Formr110CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | Formr110CountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * Formr110CountOutputType without action
   */
  export type Formr110CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formr110CountOutputType
     */
    select?: Formr110CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Formr110CountOutputType without action
   */
  export type Formr110CountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormrentaliquidaCountOutputType
   */

  export type FormrentaliquidaCountOutputType = {
    report: number
  }

  export type FormrentaliquidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormrentaliquidaCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormrentaliquidaCountOutputType without action
   */
  export type FormrentaliquidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormrentaliquidaCountOutputType
     */
    select?: FormrentaliquidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormrentaliquidaCountOutputType without action
   */
  export type FormrentaliquidaCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type FormresumenesferiCountOutputType
   */

  export type FormresumenesferiCountOutputType = {
    report: number
  }

  export type FormresumenesferiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FormresumenesferiCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * FormresumenesferiCountOutputType without action
   */
  export type FormresumenesferiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormresumenesferiCountOutputType
     */
    select?: FormresumenesferiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormresumenesferiCountOutputType without action
   */
  export type FormresumenesferiCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    report: number
    student: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | RoomCountOutputTypeCountReportArgs
    student?: boolean | RoomCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    report: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | StudentCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    room: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | UserCountOutputTypeCountRoomArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model formactivosfijos
   */

  export type AggregateFormactivosfijos = {
    _count: FormactivosfijosCountAggregateOutputType | null
    _min: FormactivosfijosMinAggregateOutputType | null
    _max: FormactivosfijosMaxAggregateOutputType | null
  }

  export type FormactivosfijosMinAggregateOutputType = {
    actID: string | null
  }

  export type FormactivosfijosMaxAggregateOutputType = {
    actID: string | null
  }

  export type FormactivosfijosCountAggregateOutputType = {
    actID: number
    actContent: number
    _all: number
  }


  export type FormactivosfijosMinAggregateInputType = {
    actID?: true
  }

  export type FormactivosfijosMaxAggregateInputType = {
    actID?: true
  }

  export type FormactivosfijosCountAggregateInputType = {
    actID?: true
    actContent?: true
    _all?: true
  }

  export type FormactivosfijosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formactivosfijos to aggregate.
     */
    where?: formactivosfijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formactivosfijos to fetch.
     */
    orderBy?: formactivosfijosOrderByWithRelationInput | formactivosfijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formactivosfijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formactivosfijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formactivosfijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formactivosfijos
    **/
    _count?: true | FormactivosfijosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormactivosfijosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormactivosfijosMaxAggregateInputType
  }

  export type GetFormactivosfijosAggregateType<T extends FormactivosfijosAggregateArgs> = {
        [P in keyof T & keyof AggregateFormactivosfijos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormactivosfijos[P]>
      : GetScalarType<T[P], AggregateFormactivosfijos[P]>
  }




  export type formactivosfijosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formactivosfijosWhereInput
    orderBy?: formactivosfijosOrderByWithAggregationInput | formactivosfijosOrderByWithAggregationInput[]
    by: FormactivosfijosScalarFieldEnum[] | FormactivosfijosScalarFieldEnum
    having?: formactivosfijosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormactivosfijosCountAggregateInputType | true
    _min?: FormactivosfijosMinAggregateInputType
    _max?: FormactivosfijosMaxAggregateInputType
  }

  export type FormactivosfijosGroupByOutputType = {
    actID: string
    actContent: JsonValue
    _count: FormactivosfijosCountAggregateOutputType | null
    _min: FormactivosfijosMinAggregateOutputType | null
    _max: FormactivosfijosMaxAggregateOutputType | null
  }

  type GetFormactivosfijosGroupByPayload<T extends formactivosfijosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormactivosfijosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormactivosfijosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormactivosfijosGroupByOutputType[P]>
            : GetScalarType<T[P], FormactivosfijosGroupByOutputType[P]>
        }
      >
    >


  export type formactivosfijosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actID?: boolean
    actContent?: boolean
    report?: boolean | formactivosfijos$reportArgs<ExtArgs>
    _count?: boolean | FormactivosfijosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formactivosfijos"]>



  export type formactivosfijosSelectScalar = {
    actID?: boolean
    actContent?: boolean
  }

  export type formactivosfijosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"actID" | "actContent", ExtArgs["result"]["formactivosfijos"]>
  export type formactivosfijosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formactivosfijos$reportArgs<ExtArgs>
    _count?: boolean | FormactivosfijosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formactivosfijosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formactivosfijos"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      actID: string
      actContent: Prisma.JsonValue
    }, ExtArgs["result"]["formactivosfijos"]>
    composites: {}
  }

  type formactivosfijosGetPayload<S extends boolean | null | undefined | formactivosfijosDefaultArgs> = $Result.GetResult<Prisma.$formactivosfijosPayload, S>

  type formactivosfijosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formactivosfijosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormactivosfijosCountAggregateInputType | true
    }

  export interface formactivosfijosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formactivosfijos'], meta: { name: 'formactivosfijos' } }
    /**
     * Find zero or one Formactivosfijos that matches the filter.
     * @param {formactivosfijosFindUniqueArgs} args - Arguments to find a Formactivosfijos
     * @example
     * // Get one Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formactivosfijosFindUniqueArgs>(args: SelectSubset<T, formactivosfijosFindUniqueArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formactivosfijos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formactivosfijosFindUniqueOrThrowArgs} args - Arguments to find a Formactivosfijos
     * @example
     * // Get one Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formactivosfijosFindUniqueOrThrowArgs>(args: SelectSubset<T, formactivosfijosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formactivosfijos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formactivosfijosFindFirstArgs} args - Arguments to find a Formactivosfijos
     * @example
     * // Get one Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formactivosfijosFindFirstArgs>(args?: SelectSubset<T, formactivosfijosFindFirstArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formactivosfijos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formactivosfijosFindFirstOrThrowArgs} args - Arguments to find a Formactivosfijos
     * @example
     * // Get one Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formactivosfijosFindFirstOrThrowArgs>(args?: SelectSubset<T, formactivosfijosFindFirstOrThrowArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formactivosfijos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formactivosfijosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.findMany()
     * 
     * // Get first 10 Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.findMany({ take: 10 })
     * 
     * // Only select the `actID`
     * const formactivosfijosWithActIDOnly = await prisma.formactivosfijos.findMany({ select: { actID: true } })
     * 
     */
    findMany<T extends formactivosfijosFindManyArgs>(args?: SelectSubset<T, formactivosfijosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formactivosfijos.
     * @param {formactivosfijosCreateArgs} args - Arguments to create a Formactivosfijos.
     * @example
     * // Create one Formactivosfijos
     * const Formactivosfijos = await prisma.formactivosfijos.create({
     *   data: {
     *     // ... data to create a Formactivosfijos
     *   }
     * })
     * 
     */
    create<T extends formactivosfijosCreateArgs>(args: SelectSubset<T, formactivosfijosCreateArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formactivosfijos.
     * @param {formactivosfijosCreateManyArgs} args - Arguments to create many Formactivosfijos.
     * @example
     * // Create many Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formactivosfijosCreateManyArgs>(args?: SelectSubset<T, formactivosfijosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formactivosfijos.
     * @param {formactivosfijosDeleteArgs} args - Arguments to delete one Formactivosfijos.
     * @example
     * // Delete one Formactivosfijos
     * const Formactivosfijos = await prisma.formactivosfijos.delete({
     *   where: {
     *     // ... filter to delete one Formactivosfijos
     *   }
     * })
     * 
     */
    delete<T extends formactivosfijosDeleteArgs>(args: SelectSubset<T, formactivosfijosDeleteArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formactivosfijos.
     * @param {formactivosfijosUpdateArgs} args - Arguments to update one Formactivosfijos.
     * @example
     * // Update one Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formactivosfijosUpdateArgs>(args: SelectSubset<T, formactivosfijosUpdateArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formactivosfijos.
     * @param {formactivosfijosDeleteManyArgs} args - Arguments to filter Formactivosfijos to delete.
     * @example
     * // Delete a few Formactivosfijos
     * const { count } = await prisma.formactivosfijos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formactivosfijosDeleteManyArgs>(args?: SelectSubset<T, formactivosfijosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formactivosfijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formactivosfijosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formactivosfijosUpdateManyArgs>(args: SelectSubset<T, formactivosfijosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formactivosfijos.
     * @param {formactivosfijosUpsertArgs} args - Arguments to update or create a Formactivosfijos.
     * @example
     * // Update or create a Formactivosfijos
     * const formactivosfijos = await prisma.formactivosfijos.upsert({
     *   create: {
     *     // ... data to create a Formactivosfijos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formactivosfijos we want to update
     *   }
     * })
     */
    upsert<T extends formactivosfijosUpsertArgs>(args: SelectSubset<T, formactivosfijosUpsertArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formactivosfijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formactivosfijosCountArgs} args - Arguments to filter Formactivosfijos to count.
     * @example
     * // Count the number of Formactivosfijos
     * const count = await prisma.formactivosfijos.count({
     *   where: {
     *     // ... the filter for the Formactivosfijos we want to count
     *   }
     * })
    **/
    count<T extends formactivosfijosCountArgs>(
      args?: Subset<T, formactivosfijosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormactivosfijosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formactivosfijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormactivosfijosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormactivosfijosAggregateArgs>(args: Subset<T, FormactivosfijosAggregateArgs>): Prisma.PrismaPromise<GetFormactivosfijosAggregateType<T>>

    /**
     * Group by Formactivosfijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formactivosfijosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formactivosfijosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formactivosfijosGroupByArgs['orderBy'] }
        : { orderBy?: formactivosfijosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formactivosfijosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormactivosfijosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formactivosfijos model
   */
  readonly fields: formactivosfijosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formactivosfijos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formactivosfijosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formactivosfijos$reportArgs<ExtArgs> = {}>(args?: Subset<T, formactivosfijos$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formactivosfijos model
   */
  interface formactivosfijosFieldRefs {
    readonly actID: FieldRef<"formactivosfijos", 'String'>
    readonly actContent: FieldRef<"formactivosfijos", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formactivosfijos findUnique
   */
  export type formactivosfijosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * Filter, which formactivosfijos to fetch.
     */
    where: formactivosfijosWhereUniqueInput
  }

  /**
   * formactivosfijos findUniqueOrThrow
   */
  export type formactivosfijosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * Filter, which formactivosfijos to fetch.
     */
    where: formactivosfijosWhereUniqueInput
  }

  /**
   * formactivosfijos findFirst
   */
  export type formactivosfijosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * Filter, which formactivosfijos to fetch.
     */
    where?: formactivosfijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formactivosfijos to fetch.
     */
    orderBy?: formactivosfijosOrderByWithRelationInput | formactivosfijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formactivosfijos.
     */
    cursor?: formactivosfijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formactivosfijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formactivosfijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formactivosfijos.
     */
    distinct?: FormactivosfijosScalarFieldEnum | FormactivosfijosScalarFieldEnum[]
  }

  /**
   * formactivosfijos findFirstOrThrow
   */
  export type formactivosfijosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * Filter, which formactivosfijos to fetch.
     */
    where?: formactivosfijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formactivosfijos to fetch.
     */
    orderBy?: formactivosfijosOrderByWithRelationInput | formactivosfijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formactivosfijos.
     */
    cursor?: formactivosfijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formactivosfijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formactivosfijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formactivosfijos.
     */
    distinct?: FormactivosfijosScalarFieldEnum | FormactivosfijosScalarFieldEnum[]
  }

  /**
   * formactivosfijos findMany
   */
  export type formactivosfijosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * Filter, which formactivosfijos to fetch.
     */
    where?: formactivosfijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formactivosfijos to fetch.
     */
    orderBy?: formactivosfijosOrderByWithRelationInput | formactivosfijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formactivosfijos.
     */
    cursor?: formactivosfijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formactivosfijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formactivosfijos.
     */
    skip?: number
    distinct?: FormactivosfijosScalarFieldEnum | FormactivosfijosScalarFieldEnum[]
  }

  /**
   * formactivosfijos create
   */
  export type formactivosfijosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * The data needed to create a formactivosfijos.
     */
    data: XOR<formactivosfijosCreateInput, formactivosfijosUncheckedCreateInput>
  }

  /**
   * formactivosfijos createMany
   */
  export type formactivosfijosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formactivosfijos.
     */
    data: formactivosfijosCreateManyInput | formactivosfijosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formactivosfijos update
   */
  export type formactivosfijosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * The data needed to update a formactivosfijos.
     */
    data: XOR<formactivosfijosUpdateInput, formactivosfijosUncheckedUpdateInput>
    /**
     * Choose, which formactivosfijos to update.
     */
    where: formactivosfijosWhereUniqueInput
  }

  /**
   * formactivosfijos updateMany
   */
  export type formactivosfijosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formactivosfijos.
     */
    data: XOR<formactivosfijosUpdateManyMutationInput, formactivosfijosUncheckedUpdateManyInput>
    /**
     * Filter which formactivosfijos to update
     */
    where?: formactivosfijosWhereInput
    /**
     * Limit how many formactivosfijos to update.
     */
    limit?: number
  }

  /**
   * formactivosfijos upsert
   */
  export type formactivosfijosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * The filter to search for the formactivosfijos to update in case it exists.
     */
    where: formactivosfijosWhereUniqueInput
    /**
     * In case the formactivosfijos found by the `where` argument doesn't exist, create a new formactivosfijos with this data.
     */
    create: XOR<formactivosfijosCreateInput, formactivosfijosUncheckedCreateInput>
    /**
     * In case the formactivosfijos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formactivosfijosUpdateInput, formactivosfijosUncheckedUpdateInput>
  }

  /**
   * formactivosfijos delete
   */
  export type formactivosfijosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
    /**
     * Filter which formactivosfijos to delete.
     */
    where: formactivosfijosWhereUniqueInput
  }

  /**
   * formactivosfijos deleteMany
   */
  export type formactivosfijosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formactivosfijos to delete
     */
    where?: formactivosfijosWhereInput
    /**
     * Limit how many formactivosfijos to delete.
     */
    limit?: number
  }

  /**
   * formactivosfijos.report
   */
  export type formactivosfijos$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formactivosfijos without action
   */
  export type formactivosfijosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formactivosfijos
     */
    select?: formactivosfijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formactivosfijos
     */
    omit?: formactivosfijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formactivosfijosInclude<ExtArgs> | null
  }


  /**
   * Model formcaratula
   */

  export type AggregateFormcaratula = {
    _count: FormcaratulaCountAggregateOutputType | null
    _min: FormcaratulaMinAggregateOutputType | null
    _max: FormcaratulaMaxAggregateOutputType | null
  }

  export type FormcaratulaMinAggregateOutputType = {
    carID: string | null
  }

  export type FormcaratulaMaxAggregateOutputType = {
    carID: string | null
  }

  export type FormcaratulaCountAggregateOutputType = {
    carID: number
    carContent: number
    _all: number
  }


  export type FormcaratulaMinAggregateInputType = {
    carID?: true
  }

  export type FormcaratulaMaxAggregateInputType = {
    carID?: true
  }

  export type FormcaratulaCountAggregateInputType = {
    carID?: true
    carContent?: true
    _all?: true
  }

  export type FormcaratulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formcaratula to aggregate.
     */
    where?: formcaratulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formcaratulas to fetch.
     */
    orderBy?: formcaratulaOrderByWithRelationInput | formcaratulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formcaratulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formcaratulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formcaratulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formcaratulas
    **/
    _count?: true | FormcaratulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormcaratulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormcaratulaMaxAggregateInputType
  }

  export type GetFormcaratulaAggregateType<T extends FormcaratulaAggregateArgs> = {
        [P in keyof T & keyof AggregateFormcaratula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormcaratula[P]>
      : GetScalarType<T[P], AggregateFormcaratula[P]>
  }




  export type formcaratulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formcaratulaWhereInput
    orderBy?: formcaratulaOrderByWithAggregationInput | formcaratulaOrderByWithAggregationInput[]
    by: FormcaratulaScalarFieldEnum[] | FormcaratulaScalarFieldEnum
    having?: formcaratulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormcaratulaCountAggregateInputType | true
    _min?: FormcaratulaMinAggregateInputType
    _max?: FormcaratulaMaxAggregateInputType
  }

  export type FormcaratulaGroupByOutputType = {
    carID: string
    carContent: JsonValue
    _count: FormcaratulaCountAggregateOutputType | null
    _min: FormcaratulaMinAggregateOutputType | null
    _max: FormcaratulaMaxAggregateOutputType | null
  }

  type GetFormcaratulaGroupByPayload<T extends formcaratulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormcaratulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormcaratulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormcaratulaGroupByOutputType[P]>
            : GetScalarType<T[P], FormcaratulaGroupByOutputType[P]>
        }
      >
    >


  export type formcaratulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carID?: boolean
    carContent?: boolean
    report?: boolean | formcaratula$reportArgs<ExtArgs>
    _count?: boolean | FormcaratulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formcaratula"]>



  export type formcaratulaSelectScalar = {
    carID?: boolean
    carContent?: boolean
  }

  export type formcaratulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"carID" | "carContent", ExtArgs["result"]["formcaratula"]>
  export type formcaratulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formcaratula$reportArgs<ExtArgs>
    _count?: boolean | FormcaratulaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formcaratulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formcaratula"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carID: string
      carContent: Prisma.JsonValue
    }, ExtArgs["result"]["formcaratula"]>
    composites: {}
  }

  type formcaratulaGetPayload<S extends boolean | null | undefined | formcaratulaDefaultArgs> = $Result.GetResult<Prisma.$formcaratulaPayload, S>

  type formcaratulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formcaratulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormcaratulaCountAggregateInputType | true
    }

  export interface formcaratulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formcaratula'], meta: { name: 'formcaratula' } }
    /**
     * Find zero or one Formcaratula that matches the filter.
     * @param {formcaratulaFindUniqueArgs} args - Arguments to find a Formcaratula
     * @example
     * // Get one Formcaratula
     * const formcaratula = await prisma.formcaratula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formcaratulaFindUniqueArgs>(args: SelectSubset<T, formcaratulaFindUniqueArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formcaratula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formcaratulaFindUniqueOrThrowArgs} args - Arguments to find a Formcaratula
     * @example
     * // Get one Formcaratula
     * const formcaratula = await prisma.formcaratula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formcaratulaFindUniqueOrThrowArgs>(args: SelectSubset<T, formcaratulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formcaratula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formcaratulaFindFirstArgs} args - Arguments to find a Formcaratula
     * @example
     * // Get one Formcaratula
     * const formcaratula = await prisma.formcaratula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formcaratulaFindFirstArgs>(args?: SelectSubset<T, formcaratulaFindFirstArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formcaratula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formcaratulaFindFirstOrThrowArgs} args - Arguments to find a Formcaratula
     * @example
     * // Get one Formcaratula
     * const formcaratula = await prisma.formcaratula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formcaratulaFindFirstOrThrowArgs>(args?: SelectSubset<T, formcaratulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formcaratulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formcaratulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formcaratulas
     * const formcaratulas = await prisma.formcaratula.findMany()
     * 
     * // Get first 10 Formcaratulas
     * const formcaratulas = await prisma.formcaratula.findMany({ take: 10 })
     * 
     * // Only select the `carID`
     * const formcaratulaWithCarIDOnly = await prisma.formcaratula.findMany({ select: { carID: true } })
     * 
     */
    findMany<T extends formcaratulaFindManyArgs>(args?: SelectSubset<T, formcaratulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formcaratula.
     * @param {formcaratulaCreateArgs} args - Arguments to create a Formcaratula.
     * @example
     * // Create one Formcaratula
     * const Formcaratula = await prisma.formcaratula.create({
     *   data: {
     *     // ... data to create a Formcaratula
     *   }
     * })
     * 
     */
    create<T extends formcaratulaCreateArgs>(args: SelectSubset<T, formcaratulaCreateArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formcaratulas.
     * @param {formcaratulaCreateManyArgs} args - Arguments to create many Formcaratulas.
     * @example
     * // Create many Formcaratulas
     * const formcaratula = await prisma.formcaratula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formcaratulaCreateManyArgs>(args?: SelectSubset<T, formcaratulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formcaratula.
     * @param {formcaratulaDeleteArgs} args - Arguments to delete one Formcaratula.
     * @example
     * // Delete one Formcaratula
     * const Formcaratula = await prisma.formcaratula.delete({
     *   where: {
     *     // ... filter to delete one Formcaratula
     *   }
     * })
     * 
     */
    delete<T extends formcaratulaDeleteArgs>(args: SelectSubset<T, formcaratulaDeleteArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formcaratula.
     * @param {formcaratulaUpdateArgs} args - Arguments to update one Formcaratula.
     * @example
     * // Update one Formcaratula
     * const formcaratula = await prisma.formcaratula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formcaratulaUpdateArgs>(args: SelectSubset<T, formcaratulaUpdateArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formcaratulas.
     * @param {formcaratulaDeleteManyArgs} args - Arguments to filter Formcaratulas to delete.
     * @example
     * // Delete a few Formcaratulas
     * const { count } = await prisma.formcaratula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formcaratulaDeleteManyArgs>(args?: SelectSubset<T, formcaratulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formcaratulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formcaratulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formcaratulas
     * const formcaratula = await prisma.formcaratula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formcaratulaUpdateManyArgs>(args: SelectSubset<T, formcaratulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formcaratula.
     * @param {formcaratulaUpsertArgs} args - Arguments to update or create a Formcaratula.
     * @example
     * // Update or create a Formcaratula
     * const formcaratula = await prisma.formcaratula.upsert({
     *   create: {
     *     // ... data to create a Formcaratula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formcaratula we want to update
     *   }
     * })
     */
    upsert<T extends formcaratulaUpsertArgs>(args: SelectSubset<T, formcaratulaUpsertArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formcaratulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formcaratulaCountArgs} args - Arguments to filter Formcaratulas to count.
     * @example
     * // Count the number of Formcaratulas
     * const count = await prisma.formcaratula.count({
     *   where: {
     *     // ... the filter for the Formcaratulas we want to count
     *   }
     * })
    **/
    count<T extends formcaratulaCountArgs>(
      args?: Subset<T, formcaratulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormcaratulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formcaratula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormcaratulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormcaratulaAggregateArgs>(args: Subset<T, FormcaratulaAggregateArgs>): Prisma.PrismaPromise<GetFormcaratulaAggregateType<T>>

    /**
     * Group by Formcaratula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formcaratulaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formcaratulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formcaratulaGroupByArgs['orderBy'] }
        : { orderBy?: formcaratulaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formcaratulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormcaratulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formcaratula model
   */
  readonly fields: formcaratulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formcaratula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formcaratulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formcaratula$reportArgs<ExtArgs> = {}>(args?: Subset<T, formcaratula$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formcaratula model
   */
  interface formcaratulaFieldRefs {
    readonly carID: FieldRef<"formcaratula", 'String'>
    readonly carContent: FieldRef<"formcaratula", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formcaratula findUnique
   */
  export type formcaratulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * Filter, which formcaratula to fetch.
     */
    where: formcaratulaWhereUniqueInput
  }

  /**
   * formcaratula findUniqueOrThrow
   */
  export type formcaratulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * Filter, which formcaratula to fetch.
     */
    where: formcaratulaWhereUniqueInput
  }

  /**
   * formcaratula findFirst
   */
  export type formcaratulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * Filter, which formcaratula to fetch.
     */
    where?: formcaratulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formcaratulas to fetch.
     */
    orderBy?: formcaratulaOrderByWithRelationInput | formcaratulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formcaratulas.
     */
    cursor?: formcaratulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formcaratulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formcaratulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formcaratulas.
     */
    distinct?: FormcaratulaScalarFieldEnum | FormcaratulaScalarFieldEnum[]
  }

  /**
   * formcaratula findFirstOrThrow
   */
  export type formcaratulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * Filter, which formcaratula to fetch.
     */
    where?: formcaratulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formcaratulas to fetch.
     */
    orderBy?: formcaratulaOrderByWithRelationInput | formcaratulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formcaratulas.
     */
    cursor?: formcaratulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formcaratulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formcaratulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formcaratulas.
     */
    distinct?: FormcaratulaScalarFieldEnum | FormcaratulaScalarFieldEnum[]
  }

  /**
   * formcaratula findMany
   */
  export type formcaratulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * Filter, which formcaratulas to fetch.
     */
    where?: formcaratulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formcaratulas to fetch.
     */
    orderBy?: formcaratulaOrderByWithRelationInput | formcaratulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formcaratulas.
     */
    cursor?: formcaratulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formcaratulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formcaratulas.
     */
    skip?: number
    distinct?: FormcaratulaScalarFieldEnum | FormcaratulaScalarFieldEnum[]
  }

  /**
   * formcaratula create
   */
  export type formcaratulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * The data needed to create a formcaratula.
     */
    data: XOR<formcaratulaCreateInput, formcaratulaUncheckedCreateInput>
  }

  /**
   * formcaratula createMany
   */
  export type formcaratulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formcaratulas.
     */
    data: formcaratulaCreateManyInput | formcaratulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formcaratula update
   */
  export type formcaratulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * The data needed to update a formcaratula.
     */
    data: XOR<formcaratulaUpdateInput, formcaratulaUncheckedUpdateInput>
    /**
     * Choose, which formcaratula to update.
     */
    where: formcaratulaWhereUniqueInput
  }

  /**
   * formcaratula updateMany
   */
  export type formcaratulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formcaratulas.
     */
    data: XOR<formcaratulaUpdateManyMutationInput, formcaratulaUncheckedUpdateManyInput>
    /**
     * Filter which formcaratulas to update
     */
    where?: formcaratulaWhereInput
    /**
     * Limit how many formcaratulas to update.
     */
    limit?: number
  }

  /**
   * formcaratula upsert
   */
  export type formcaratulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * The filter to search for the formcaratula to update in case it exists.
     */
    where: formcaratulaWhereUniqueInput
    /**
     * In case the formcaratula found by the `where` argument doesn't exist, create a new formcaratula with this data.
     */
    create: XOR<formcaratulaCreateInput, formcaratulaUncheckedCreateInput>
    /**
     * In case the formcaratula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formcaratulaUpdateInput, formcaratulaUncheckedUpdateInput>
  }

  /**
   * formcaratula delete
   */
  export type formcaratulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
    /**
     * Filter which formcaratula to delete.
     */
    where: formcaratulaWhereUniqueInput
  }

  /**
   * formcaratula deleteMany
   */
  export type formcaratulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formcaratulas to delete
     */
    where?: formcaratulaWhereInput
    /**
     * Limit how many formcaratulas to delete.
     */
    limit?: number
  }

  /**
   * formcaratula.report
   */
  export type formcaratula$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formcaratula without action
   */
  export type formcaratulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formcaratula
     */
    select?: formcaratulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formcaratula
     */
    omit?: formcaratulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formcaratulaInclude<ExtArgs> | null
  }


  /**
   * Model formdetallerenglones
   */

  export type AggregateFormdetallerenglones = {
    _count: FormdetallerenglonesCountAggregateOutputType | null
    _min: FormdetallerenglonesMinAggregateOutputType | null
    _max: FormdetallerenglonesMaxAggregateOutputType | null
  }

  export type FormdetallerenglonesMinAggregateOutputType = {
    detID: string | null
  }

  export type FormdetallerenglonesMaxAggregateOutputType = {
    detID: string | null
  }

  export type FormdetallerenglonesCountAggregateOutputType = {
    detID: number
    detContent: number
    _all: number
  }


  export type FormdetallerenglonesMinAggregateInputType = {
    detID?: true
  }

  export type FormdetallerenglonesMaxAggregateInputType = {
    detID?: true
  }

  export type FormdetallerenglonesCountAggregateInputType = {
    detID?: true
    detContent?: true
    _all?: true
  }

  export type FormdetallerenglonesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formdetallerenglones to aggregate.
     */
    where?: formdetallerenglonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formdetallerenglones to fetch.
     */
    orderBy?: formdetallerenglonesOrderByWithRelationInput | formdetallerenglonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formdetallerenglonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formdetallerenglones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formdetallerenglones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formdetallerenglones
    **/
    _count?: true | FormdetallerenglonesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormdetallerenglonesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormdetallerenglonesMaxAggregateInputType
  }

  export type GetFormdetallerenglonesAggregateType<T extends FormdetallerenglonesAggregateArgs> = {
        [P in keyof T & keyof AggregateFormdetallerenglones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormdetallerenglones[P]>
      : GetScalarType<T[P], AggregateFormdetallerenglones[P]>
  }




  export type formdetallerenglonesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formdetallerenglonesWhereInput
    orderBy?: formdetallerenglonesOrderByWithAggregationInput | formdetallerenglonesOrderByWithAggregationInput[]
    by: FormdetallerenglonesScalarFieldEnum[] | FormdetallerenglonesScalarFieldEnum
    having?: formdetallerenglonesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormdetallerenglonesCountAggregateInputType | true
    _min?: FormdetallerenglonesMinAggregateInputType
    _max?: FormdetallerenglonesMaxAggregateInputType
  }

  export type FormdetallerenglonesGroupByOutputType = {
    detID: string
    detContent: JsonValue
    _count: FormdetallerenglonesCountAggregateOutputType | null
    _min: FormdetallerenglonesMinAggregateOutputType | null
    _max: FormdetallerenglonesMaxAggregateOutputType | null
  }

  type GetFormdetallerenglonesGroupByPayload<T extends formdetallerenglonesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormdetallerenglonesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormdetallerenglonesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormdetallerenglonesGroupByOutputType[P]>
            : GetScalarType<T[P], FormdetallerenglonesGroupByOutputType[P]>
        }
      >
    >


  export type formdetallerenglonesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    detID?: boolean
    detContent?: boolean
    report?: boolean | formdetallerenglones$reportArgs<ExtArgs>
    _count?: boolean | FormdetallerenglonesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formdetallerenglones"]>



  export type formdetallerenglonesSelectScalar = {
    detID?: boolean
    detContent?: boolean
  }

  export type formdetallerenglonesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"detID" | "detContent", ExtArgs["result"]["formdetallerenglones"]>
  export type formdetallerenglonesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formdetallerenglones$reportArgs<ExtArgs>
    _count?: boolean | FormdetallerenglonesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formdetallerenglonesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formdetallerenglones"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      detID: string
      detContent: Prisma.JsonValue
    }, ExtArgs["result"]["formdetallerenglones"]>
    composites: {}
  }

  type formdetallerenglonesGetPayload<S extends boolean | null | undefined | formdetallerenglonesDefaultArgs> = $Result.GetResult<Prisma.$formdetallerenglonesPayload, S>

  type formdetallerenglonesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formdetallerenglonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormdetallerenglonesCountAggregateInputType | true
    }

  export interface formdetallerenglonesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formdetallerenglones'], meta: { name: 'formdetallerenglones' } }
    /**
     * Find zero or one Formdetallerenglones that matches the filter.
     * @param {formdetallerenglonesFindUniqueArgs} args - Arguments to find a Formdetallerenglones
     * @example
     * // Get one Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formdetallerenglonesFindUniqueArgs>(args: SelectSubset<T, formdetallerenglonesFindUniqueArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formdetallerenglones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formdetallerenglonesFindUniqueOrThrowArgs} args - Arguments to find a Formdetallerenglones
     * @example
     * // Get one Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formdetallerenglonesFindUniqueOrThrowArgs>(args: SelectSubset<T, formdetallerenglonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formdetallerenglones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formdetallerenglonesFindFirstArgs} args - Arguments to find a Formdetallerenglones
     * @example
     * // Get one Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formdetallerenglonesFindFirstArgs>(args?: SelectSubset<T, formdetallerenglonesFindFirstArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formdetallerenglones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formdetallerenglonesFindFirstOrThrowArgs} args - Arguments to find a Formdetallerenglones
     * @example
     * // Get one Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formdetallerenglonesFindFirstOrThrowArgs>(args?: SelectSubset<T, formdetallerenglonesFindFirstOrThrowArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formdetallerenglones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formdetallerenglonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.findMany()
     * 
     * // Get first 10 Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.findMany({ take: 10 })
     * 
     * // Only select the `detID`
     * const formdetallerenglonesWithDetIDOnly = await prisma.formdetallerenglones.findMany({ select: { detID: true } })
     * 
     */
    findMany<T extends formdetallerenglonesFindManyArgs>(args?: SelectSubset<T, formdetallerenglonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formdetallerenglones.
     * @param {formdetallerenglonesCreateArgs} args - Arguments to create a Formdetallerenglones.
     * @example
     * // Create one Formdetallerenglones
     * const Formdetallerenglones = await prisma.formdetallerenglones.create({
     *   data: {
     *     // ... data to create a Formdetallerenglones
     *   }
     * })
     * 
     */
    create<T extends formdetallerenglonesCreateArgs>(args: SelectSubset<T, formdetallerenglonesCreateArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formdetallerenglones.
     * @param {formdetallerenglonesCreateManyArgs} args - Arguments to create many Formdetallerenglones.
     * @example
     * // Create many Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formdetallerenglonesCreateManyArgs>(args?: SelectSubset<T, formdetallerenglonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formdetallerenglones.
     * @param {formdetallerenglonesDeleteArgs} args - Arguments to delete one Formdetallerenglones.
     * @example
     * // Delete one Formdetallerenglones
     * const Formdetallerenglones = await prisma.formdetallerenglones.delete({
     *   where: {
     *     // ... filter to delete one Formdetallerenglones
     *   }
     * })
     * 
     */
    delete<T extends formdetallerenglonesDeleteArgs>(args: SelectSubset<T, formdetallerenglonesDeleteArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formdetallerenglones.
     * @param {formdetallerenglonesUpdateArgs} args - Arguments to update one Formdetallerenglones.
     * @example
     * // Update one Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formdetallerenglonesUpdateArgs>(args: SelectSubset<T, formdetallerenglonesUpdateArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formdetallerenglones.
     * @param {formdetallerenglonesDeleteManyArgs} args - Arguments to filter Formdetallerenglones to delete.
     * @example
     * // Delete a few Formdetallerenglones
     * const { count } = await prisma.formdetallerenglones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formdetallerenglonesDeleteManyArgs>(args?: SelectSubset<T, formdetallerenglonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formdetallerenglones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formdetallerenglonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formdetallerenglonesUpdateManyArgs>(args: SelectSubset<T, formdetallerenglonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formdetallerenglones.
     * @param {formdetallerenglonesUpsertArgs} args - Arguments to update or create a Formdetallerenglones.
     * @example
     * // Update or create a Formdetallerenglones
     * const formdetallerenglones = await prisma.formdetallerenglones.upsert({
     *   create: {
     *     // ... data to create a Formdetallerenglones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formdetallerenglones we want to update
     *   }
     * })
     */
    upsert<T extends formdetallerenglonesUpsertArgs>(args: SelectSubset<T, formdetallerenglonesUpsertArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formdetallerenglones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formdetallerenglonesCountArgs} args - Arguments to filter Formdetallerenglones to count.
     * @example
     * // Count the number of Formdetallerenglones
     * const count = await prisma.formdetallerenglones.count({
     *   where: {
     *     // ... the filter for the Formdetallerenglones we want to count
     *   }
     * })
    **/
    count<T extends formdetallerenglonesCountArgs>(
      args?: Subset<T, formdetallerenglonesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormdetallerenglonesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formdetallerenglones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdetallerenglonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormdetallerenglonesAggregateArgs>(args: Subset<T, FormdetallerenglonesAggregateArgs>): Prisma.PrismaPromise<GetFormdetallerenglonesAggregateType<T>>

    /**
     * Group by Formdetallerenglones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formdetallerenglonesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formdetallerenglonesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formdetallerenglonesGroupByArgs['orderBy'] }
        : { orderBy?: formdetallerenglonesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formdetallerenglonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormdetallerenglonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formdetallerenglones model
   */
  readonly fields: formdetallerenglonesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formdetallerenglones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formdetallerenglonesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formdetallerenglones$reportArgs<ExtArgs> = {}>(args?: Subset<T, formdetallerenglones$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formdetallerenglones model
   */
  interface formdetallerenglonesFieldRefs {
    readonly detID: FieldRef<"formdetallerenglones", 'String'>
    readonly detContent: FieldRef<"formdetallerenglones", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formdetallerenglones findUnique
   */
  export type formdetallerenglonesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * Filter, which formdetallerenglones to fetch.
     */
    where: formdetallerenglonesWhereUniqueInput
  }

  /**
   * formdetallerenglones findUniqueOrThrow
   */
  export type formdetallerenglonesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * Filter, which formdetallerenglones to fetch.
     */
    where: formdetallerenglonesWhereUniqueInput
  }

  /**
   * formdetallerenglones findFirst
   */
  export type formdetallerenglonesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * Filter, which formdetallerenglones to fetch.
     */
    where?: formdetallerenglonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formdetallerenglones to fetch.
     */
    orderBy?: formdetallerenglonesOrderByWithRelationInput | formdetallerenglonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formdetallerenglones.
     */
    cursor?: formdetallerenglonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formdetallerenglones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formdetallerenglones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formdetallerenglones.
     */
    distinct?: FormdetallerenglonesScalarFieldEnum | FormdetallerenglonesScalarFieldEnum[]
  }

  /**
   * formdetallerenglones findFirstOrThrow
   */
  export type formdetallerenglonesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * Filter, which formdetallerenglones to fetch.
     */
    where?: formdetallerenglonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formdetallerenglones to fetch.
     */
    orderBy?: formdetallerenglonesOrderByWithRelationInput | formdetallerenglonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formdetallerenglones.
     */
    cursor?: formdetallerenglonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formdetallerenglones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formdetallerenglones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formdetallerenglones.
     */
    distinct?: FormdetallerenglonesScalarFieldEnum | FormdetallerenglonesScalarFieldEnum[]
  }

  /**
   * formdetallerenglones findMany
   */
  export type formdetallerenglonesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * Filter, which formdetallerenglones to fetch.
     */
    where?: formdetallerenglonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formdetallerenglones to fetch.
     */
    orderBy?: formdetallerenglonesOrderByWithRelationInput | formdetallerenglonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formdetallerenglones.
     */
    cursor?: formdetallerenglonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formdetallerenglones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formdetallerenglones.
     */
    skip?: number
    distinct?: FormdetallerenglonesScalarFieldEnum | FormdetallerenglonesScalarFieldEnum[]
  }

  /**
   * formdetallerenglones create
   */
  export type formdetallerenglonesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * The data needed to create a formdetallerenglones.
     */
    data: XOR<formdetallerenglonesCreateInput, formdetallerenglonesUncheckedCreateInput>
  }

  /**
   * formdetallerenglones createMany
   */
  export type formdetallerenglonesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formdetallerenglones.
     */
    data: formdetallerenglonesCreateManyInput | formdetallerenglonesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formdetallerenglones update
   */
  export type formdetallerenglonesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * The data needed to update a formdetallerenglones.
     */
    data: XOR<formdetallerenglonesUpdateInput, formdetallerenglonesUncheckedUpdateInput>
    /**
     * Choose, which formdetallerenglones to update.
     */
    where: formdetallerenglonesWhereUniqueInput
  }

  /**
   * formdetallerenglones updateMany
   */
  export type formdetallerenglonesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formdetallerenglones.
     */
    data: XOR<formdetallerenglonesUpdateManyMutationInput, formdetallerenglonesUncheckedUpdateManyInput>
    /**
     * Filter which formdetallerenglones to update
     */
    where?: formdetallerenglonesWhereInput
    /**
     * Limit how many formdetallerenglones to update.
     */
    limit?: number
  }

  /**
   * formdetallerenglones upsert
   */
  export type formdetallerenglonesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * The filter to search for the formdetallerenglones to update in case it exists.
     */
    where: formdetallerenglonesWhereUniqueInput
    /**
     * In case the formdetallerenglones found by the `where` argument doesn't exist, create a new formdetallerenglones with this data.
     */
    create: XOR<formdetallerenglonesCreateInput, formdetallerenglonesUncheckedCreateInput>
    /**
     * In case the formdetallerenglones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formdetallerenglonesUpdateInput, formdetallerenglonesUncheckedUpdateInput>
  }

  /**
   * formdetallerenglones delete
   */
  export type formdetallerenglonesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
    /**
     * Filter which formdetallerenglones to delete.
     */
    where: formdetallerenglonesWhereUniqueInput
  }

  /**
   * formdetallerenglones deleteMany
   */
  export type formdetallerenglonesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formdetallerenglones to delete
     */
    where?: formdetallerenglonesWhereInput
    /**
     * Limit how many formdetallerenglones to delete.
     */
    limit?: number
  }

  /**
   * formdetallerenglones.report
   */
  export type formdetallerenglones$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formdetallerenglones without action
   */
  export type formdetallerenglonesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formdetallerenglones
     */
    select?: formdetallerenglonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formdetallerenglones
     */
    omit?: formdetallerenglonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formdetallerenglonesInclude<ExtArgs> | null
  }


  /**
   * Model formesfpatrimonio
   */

  export type AggregateFormesfpatrimonio = {
    _count: FormesfpatrimonioCountAggregateOutputType | null
    _min: FormesfpatrimonioMinAggregateOutputType | null
    _max: FormesfpatrimonioMaxAggregateOutputType | null
  }

  export type FormesfpatrimonioMinAggregateOutputType = {
    esfID: string | null
  }

  export type FormesfpatrimonioMaxAggregateOutputType = {
    esfID: string | null
  }

  export type FormesfpatrimonioCountAggregateOutputType = {
    esfID: number
    esfContent: number
    _all: number
  }


  export type FormesfpatrimonioMinAggregateInputType = {
    esfID?: true
  }

  export type FormesfpatrimonioMaxAggregateInputType = {
    esfID?: true
  }

  export type FormesfpatrimonioCountAggregateInputType = {
    esfID?: true
    esfContent?: true
    _all?: true
  }

  export type FormesfpatrimonioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formesfpatrimonio to aggregate.
     */
    where?: formesfpatrimonioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formesfpatrimonios to fetch.
     */
    orderBy?: formesfpatrimonioOrderByWithRelationInput | formesfpatrimonioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formesfpatrimonioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formesfpatrimonios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formesfpatrimonios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formesfpatrimonios
    **/
    _count?: true | FormesfpatrimonioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormesfpatrimonioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormesfpatrimonioMaxAggregateInputType
  }

  export type GetFormesfpatrimonioAggregateType<T extends FormesfpatrimonioAggregateArgs> = {
        [P in keyof T & keyof AggregateFormesfpatrimonio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormesfpatrimonio[P]>
      : GetScalarType<T[P], AggregateFormesfpatrimonio[P]>
  }




  export type formesfpatrimonioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formesfpatrimonioWhereInput
    orderBy?: formesfpatrimonioOrderByWithAggregationInput | formesfpatrimonioOrderByWithAggregationInput[]
    by: FormesfpatrimonioScalarFieldEnum[] | FormesfpatrimonioScalarFieldEnum
    having?: formesfpatrimonioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormesfpatrimonioCountAggregateInputType | true
    _min?: FormesfpatrimonioMinAggregateInputType
    _max?: FormesfpatrimonioMaxAggregateInputType
  }

  export type FormesfpatrimonioGroupByOutputType = {
    esfID: string
    esfContent: JsonValue
    _count: FormesfpatrimonioCountAggregateOutputType | null
    _min: FormesfpatrimonioMinAggregateOutputType | null
    _max: FormesfpatrimonioMaxAggregateOutputType | null
  }

  type GetFormesfpatrimonioGroupByPayload<T extends formesfpatrimonioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormesfpatrimonioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormesfpatrimonioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormesfpatrimonioGroupByOutputType[P]>
            : GetScalarType<T[P], FormesfpatrimonioGroupByOutputType[P]>
        }
      >
    >


  export type formesfpatrimonioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    esfID?: boolean
    esfContent?: boolean
    report?: boolean | formesfpatrimonio$reportArgs<ExtArgs>
    _count?: boolean | FormesfpatrimonioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formesfpatrimonio"]>



  export type formesfpatrimonioSelectScalar = {
    esfID?: boolean
    esfContent?: boolean
  }

  export type formesfpatrimonioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"esfID" | "esfContent", ExtArgs["result"]["formesfpatrimonio"]>
  export type formesfpatrimonioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formesfpatrimonio$reportArgs<ExtArgs>
    _count?: boolean | FormesfpatrimonioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formesfpatrimonioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formesfpatrimonio"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      esfID: string
      esfContent: Prisma.JsonValue
    }, ExtArgs["result"]["formesfpatrimonio"]>
    composites: {}
  }

  type formesfpatrimonioGetPayload<S extends boolean | null | undefined | formesfpatrimonioDefaultArgs> = $Result.GetResult<Prisma.$formesfpatrimonioPayload, S>

  type formesfpatrimonioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formesfpatrimonioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormesfpatrimonioCountAggregateInputType | true
    }

  export interface formesfpatrimonioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formesfpatrimonio'], meta: { name: 'formesfpatrimonio' } }
    /**
     * Find zero or one Formesfpatrimonio that matches the filter.
     * @param {formesfpatrimonioFindUniqueArgs} args - Arguments to find a Formesfpatrimonio
     * @example
     * // Get one Formesfpatrimonio
     * const formesfpatrimonio = await prisma.formesfpatrimonio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formesfpatrimonioFindUniqueArgs>(args: SelectSubset<T, formesfpatrimonioFindUniqueArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formesfpatrimonio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formesfpatrimonioFindUniqueOrThrowArgs} args - Arguments to find a Formesfpatrimonio
     * @example
     * // Get one Formesfpatrimonio
     * const formesfpatrimonio = await prisma.formesfpatrimonio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formesfpatrimonioFindUniqueOrThrowArgs>(args: SelectSubset<T, formesfpatrimonioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formesfpatrimonio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formesfpatrimonioFindFirstArgs} args - Arguments to find a Formesfpatrimonio
     * @example
     * // Get one Formesfpatrimonio
     * const formesfpatrimonio = await prisma.formesfpatrimonio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formesfpatrimonioFindFirstArgs>(args?: SelectSubset<T, formesfpatrimonioFindFirstArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formesfpatrimonio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formesfpatrimonioFindFirstOrThrowArgs} args - Arguments to find a Formesfpatrimonio
     * @example
     * // Get one Formesfpatrimonio
     * const formesfpatrimonio = await prisma.formesfpatrimonio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formesfpatrimonioFindFirstOrThrowArgs>(args?: SelectSubset<T, formesfpatrimonioFindFirstOrThrowArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formesfpatrimonios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formesfpatrimonioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formesfpatrimonios
     * const formesfpatrimonios = await prisma.formesfpatrimonio.findMany()
     * 
     * // Get first 10 Formesfpatrimonios
     * const formesfpatrimonios = await prisma.formesfpatrimonio.findMany({ take: 10 })
     * 
     * // Only select the `esfID`
     * const formesfpatrimonioWithEsfIDOnly = await prisma.formesfpatrimonio.findMany({ select: { esfID: true } })
     * 
     */
    findMany<T extends formesfpatrimonioFindManyArgs>(args?: SelectSubset<T, formesfpatrimonioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formesfpatrimonio.
     * @param {formesfpatrimonioCreateArgs} args - Arguments to create a Formesfpatrimonio.
     * @example
     * // Create one Formesfpatrimonio
     * const Formesfpatrimonio = await prisma.formesfpatrimonio.create({
     *   data: {
     *     // ... data to create a Formesfpatrimonio
     *   }
     * })
     * 
     */
    create<T extends formesfpatrimonioCreateArgs>(args: SelectSubset<T, formesfpatrimonioCreateArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formesfpatrimonios.
     * @param {formesfpatrimonioCreateManyArgs} args - Arguments to create many Formesfpatrimonios.
     * @example
     * // Create many Formesfpatrimonios
     * const formesfpatrimonio = await prisma.formesfpatrimonio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formesfpatrimonioCreateManyArgs>(args?: SelectSubset<T, formesfpatrimonioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formesfpatrimonio.
     * @param {formesfpatrimonioDeleteArgs} args - Arguments to delete one Formesfpatrimonio.
     * @example
     * // Delete one Formesfpatrimonio
     * const Formesfpatrimonio = await prisma.formesfpatrimonio.delete({
     *   where: {
     *     // ... filter to delete one Formesfpatrimonio
     *   }
     * })
     * 
     */
    delete<T extends formesfpatrimonioDeleteArgs>(args: SelectSubset<T, formesfpatrimonioDeleteArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formesfpatrimonio.
     * @param {formesfpatrimonioUpdateArgs} args - Arguments to update one Formesfpatrimonio.
     * @example
     * // Update one Formesfpatrimonio
     * const formesfpatrimonio = await prisma.formesfpatrimonio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formesfpatrimonioUpdateArgs>(args: SelectSubset<T, formesfpatrimonioUpdateArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formesfpatrimonios.
     * @param {formesfpatrimonioDeleteManyArgs} args - Arguments to filter Formesfpatrimonios to delete.
     * @example
     * // Delete a few Formesfpatrimonios
     * const { count } = await prisma.formesfpatrimonio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formesfpatrimonioDeleteManyArgs>(args?: SelectSubset<T, formesfpatrimonioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formesfpatrimonios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formesfpatrimonioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formesfpatrimonios
     * const formesfpatrimonio = await prisma.formesfpatrimonio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formesfpatrimonioUpdateManyArgs>(args: SelectSubset<T, formesfpatrimonioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formesfpatrimonio.
     * @param {formesfpatrimonioUpsertArgs} args - Arguments to update or create a Formesfpatrimonio.
     * @example
     * // Update or create a Formesfpatrimonio
     * const formesfpatrimonio = await prisma.formesfpatrimonio.upsert({
     *   create: {
     *     // ... data to create a Formesfpatrimonio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formesfpatrimonio we want to update
     *   }
     * })
     */
    upsert<T extends formesfpatrimonioUpsertArgs>(args: SelectSubset<T, formesfpatrimonioUpsertArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formesfpatrimonios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formesfpatrimonioCountArgs} args - Arguments to filter Formesfpatrimonios to count.
     * @example
     * // Count the number of Formesfpatrimonios
     * const count = await prisma.formesfpatrimonio.count({
     *   where: {
     *     // ... the filter for the Formesfpatrimonios we want to count
     *   }
     * })
    **/
    count<T extends formesfpatrimonioCountArgs>(
      args?: Subset<T, formesfpatrimonioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormesfpatrimonioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formesfpatrimonio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormesfpatrimonioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormesfpatrimonioAggregateArgs>(args: Subset<T, FormesfpatrimonioAggregateArgs>): Prisma.PrismaPromise<GetFormesfpatrimonioAggregateType<T>>

    /**
     * Group by Formesfpatrimonio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formesfpatrimonioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formesfpatrimonioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formesfpatrimonioGroupByArgs['orderBy'] }
        : { orderBy?: formesfpatrimonioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formesfpatrimonioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormesfpatrimonioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formesfpatrimonio model
   */
  readonly fields: formesfpatrimonioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formesfpatrimonio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formesfpatrimonioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formesfpatrimonio$reportArgs<ExtArgs> = {}>(args?: Subset<T, formesfpatrimonio$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formesfpatrimonio model
   */
  interface formesfpatrimonioFieldRefs {
    readonly esfID: FieldRef<"formesfpatrimonio", 'String'>
    readonly esfContent: FieldRef<"formesfpatrimonio", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formesfpatrimonio findUnique
   */
  export type formesfpatrimonioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * Filter, which formesfpatrimonio to fetch.
     */
    where: formesfpatrimonioWhereUniqueInput
  }

  /**
   * formesfpatrimonio findUniqueOrThrow
   */
  export type formesfpatrimonioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * Filter, which formesfpatrimonio to fetch.
     */
    where: formesfpatrimonioWhereUniqueInput
  }

  /**
   * formesfpatrimonio findFirst
   */
  export type formesfpatrimonioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * Filter, which formesfpatrimonio to fetch.
     */
    where?: formesfpatrimonioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formesfpatrimonios to fetch.
     */
    orderBy?: formesfpatrimonioOrderByWithRelationInput | formesfpatrimonioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formesfpatrimonios.
     */
    cursor?: formesfpatrimonioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formesfpatrimonios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formesfpatrimonios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formesfpatrimonios.
     */
    distinct?: FormesfpatrimonioScalarFieldEnum | FormesfpatrimonioScalarFieldEnum[]
  }

  /**
   * formesfpatrimonio findFirstOrThrow
   */
  export type formesfpatrimonioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * Filter, which formesfpatrimonio to fetch.
     */
    where?: formesfpatrimonioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formesfpatrimonios to fetch.
     */
    orderBy?: formesfpatrimonioOrderByWithRelationInput | formesfpatrimonioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formesfpatrimonios.
     */
    cursor?: formesfpatrimonioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formesfpatrimonios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formesfpatrimonios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formesfpatrimonios.
     */
    distinct?: FormesfpatrimonioScalarFieldEnum | FormesfpatrimonioScalarFieldEnum[]
  }

  /**
   * formesfpatrimonio findMany
   */
  export type formesfpatrimonioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * Filter, which formesfpatrimonios to fetch.
     */
    where?: formesfpatrimonioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formesfpatrimonios to fetch.
     */
    orderBy?: formesfpatrimonioOrderByWithRelationInput | formesfpatrimonioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formesfpatrimonios.
     */
    cursor?: formesfpatrimonioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formesfpatrimonios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formesfpatrimonios.
     */
    skip?: number
    distinct?: FormesfpatrimonioScalarFieldEnum | FormesfpatrimonioScalarFieldEnum[]
  }

  /**
   * formesfpatrimonio create
   */
  export type formesfpatrimonioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * The data needed to create a formesfpatrimonio.
     */
    data: XOR<formesfpatrimonioCreateInput, formesfpatrimonioUncheckedCreateInput>
  }

  /**
   * formesfpatrimonio createMany
   */
  export type formesfpatrimonioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formesfpatrimonios.
     */
    data: formesfpatrimonioCreateManyInput | formesfpatrimonioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formesfpatrimonio update
   */
  export type formesfpatrimonioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * The data needed to update a formesfpatrimonio.
     */
    data: XOR<formesfpatrimonioUpdateInput, formesfpatrimonioUncheckedUpdateInput>
    /**
     * Choose, which formesfpatrimonio to update.
     */
    where: formesfpatrimonioWhereUniqueInput
  }

  /**
   * formesfpatrimonio updateMany
   */
  export type formesfpatrimonioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formesfpatrimonios.
     */
    data: XOR<formesfpatrimonioUpdateManyMutationInput, formesfpatrimonioUncheckedUpdateManyInput>
    /**
     * Filter which formesfpatrimonios to update
     */
    where?: formesfpatrimonioWhereInput
    /**
     * Limit how many formesfpatrimonios to update.
     */
    limit?: number
  }

  /**
   * formesfpatrimonio upsert
   */
  export type formesfpatrimonioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * The filter to search for the formesfpatrimonio to update in case it exists.
     */
    where: formesfpatrimonioWhereUniqueInput
    /**
     * In case the formesfpatrimonio found by the `where` argument doesn't exist, create a new formesfpatrimonio with this data.
     */
    create: XOR<formesfpatrimonioCreateInput, formesfpatrimonioUncheckedCreateInput>
    /**
     * In case the formesfpatrimonio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formesfpatrimonioUpdateInput, formesfpatrimonioUncheckedUpdateInput>
  }

  /**
   * formesfpatrimonio delete
   */
  export type formesfpatrimonioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
    /**
     * Filter which formesfpatrimonio to delete.
     */
    where: formesfpatrimonioWhereUniqueInput
  }

  /**
   * formesfpatrimonio deleteMany
   */
  export type formesfpatrimonioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formesfpatrimonios to delete
     */
    where?: formesfpatrimonioWhereInput
    /**
     * Limit how many formesfpatrimonios to delete.
     */
    limit?: number
  }

  /**
   * formesfpatrimonio.report
   */
  export type formesfpatrimonio$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formesfpatrimonio without action
   */
  export type formesfpatrimonioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formesfpatrimonio
     */
    select?: formesfpatrimonioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formesfpatrimonio
     */
    omit?: formesfpatrimonioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formesfpatrimonioInclude<ExtArgs> | null
  }


  /**
   * Model formimpuestodiferido
   */

  export type AggregateFormimpuestodiferido = {
    _count: FormimpuestodiferidoCountAggregateOutputType | null
    _min: FormimpuestodiferidoMinAggregateOutputType | null
    _max: FormimpuestodiferidoMaxAggregateOutputType | null
  }

  export type FormimpuestodiferidoMinAggregateOutputType = {
    impID: string | null
  }

  export type FormimpuestodiferidoMaxAggregateOutputType = {
    impID: string | null
  }

  export type FormimpuestodiferidoCountAggregateOutputType = {
    impID: number
    impContent: number
    _all: number
  }


  export type FormimpuestodiferidoMinAggregateInputType = {
    impID?: true
  }

  export type FormimpuestodiferidoMaxAggregateInputType = {
    impID?: true
  }

  export type FormimpuestodiferidoCountAggregateInputType = {
    impID?: true
    impContent?: true
    _all?: true
  }

  export type FormimpuestodiferidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formimpuestodiferido to aggregate.
     */
    where?: formimpuestodiferidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formimpuestodiferidos to fetch.
     */
    orderBy?: formimpuestodiferidoOrderByWithRelationInput | formimpuestodiferidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formimpuestodiferidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formimpuestodiferidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formimpuestodiferidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formimpuestodiferidos
    **/
    _count?: true | FormimpuestodiferidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormimpuestodiferidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormimpuestodiferidoMaxAggregateInputType
  }

  export type GetFormimpuestodiferidoAggregateType<T extends FormimpuestodiferidoAggregateArgs> = {
        [P in keyof T & keyof AggregateFormimpuestodiferido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormimpuestodiferido[P]>
      : GetScalarType<T[P], AggregateFormimpuestodiferido[P]>
  }




  export type formimpuestodiferidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formimpuestodiferidoWhereInput
    orderBy?: formimpuestodiferidoOrderByWithAggregationInput | formimpuestodiferidoOrderByWithAggregationInput[]
    by: FormimpuestodiferidoScalarFieldEnum[] | FormimpuestodiferidoScalarFieldEnum
    having?: formimpuestodiferidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormimpuestodiferidoCountAggregateInputType | true
    _min?: FormimpuestodiferidoMinAggregateInputType
    _max?: FormimpuestodiferidoMaxAggregateInputType
  }

  export type FormimpuestodiferidoGroupByOutputType = {
    impID: string
    impContent: JsonValue
    _count: FormimpuestodiferidoCountAggregateOutputType | null
    _min: FormimpuestodiferidoMinAggregateOutputType | null
    _max: FormimpuestodiferidoMaxAggregateOutputType | null
  }

  type GetFormimpuestodiferidoGroupByPayload<T extends formimpuestodiferidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormimpuestodiferidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormimpuestodiferidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormimpuestodiferidoGroupByOutputType[P]>
            : GetScalarType<T[P], FormimpuestodiferidoGroupByOutputType[P]>
        }
      >
    >


  export type formimpuestodiferidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    impID?: boolean
    impContent?: boolean
    report?: boolean | formimpuestodiferido$reportArgs<ExtArgs>
    _count?: boolean | FormimpuestodiferidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formimpuestodiferido"]>



  export type formimpuestodiferidoSelectScalar = {
    impID?: boolean
    impContent?: boolean
  }

  export type formimpuestodiferidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"impID" | "impContent", ExtArgs["result"]["formimpuestodiferido"]>
  export type formimpuestodiferidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formimpuestodiferido$reportArgs<ExtArgs>
    _count?: boolean | FormimpuestodiferidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formimpuestodiferidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formimpuestodiferido"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      impID: string
      impContent: Prisma.JsonValue
    }, ExtArgs["result"]["formimpuestodiferido"]>
    composites: {}
  }

  type formimpuestodiferidoGetPayload<S extends boolean | null | undefined | formimpuestodiferidoDefaultArgs> = $Result.GetResult<Prisma.$formimpuestodiferidoPayload, S>

  type formimpuestodiferidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formimpuestodiferidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormimpuestodiferidoCountAggregateInputType | true
    }

  export interface formimpuestodiferidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formimpuestodiferido'], meta: { name: 'formimpuestodiferido' } }
    /**
     * Find zero or one Formimpuestodiferido that matches the filter.
     * @param {formimpuestodiferidoFindUniqueArgs} args - Arguments to find a Formimpuestodiferido
     * @example
     * // Get one Formimpuestodiferido
     * const formimpuestodiferido = await prisma.formimpuestodiferido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formimpuestodiferidoFindUniqueArgs>(args: SelectSubset<T, formimpuestodiferidoFindUniqueArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formimpuestodiferido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formimpuestodiferidoFindUniqueOrThrowArgs} args - Arguments to find a Formimpuestodiferido
     * @example
     * // Get one Formimpuestodiferido
     * const formimpuestodiferido = await prisma.formimpuestodiferido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formimpuestodiferidoFindUniqueOrThrowArgs>(args: SelectSubset<T, formimpuestodiferidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formimpuestodiferido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formimpuestodiferidoFindFirstArgs} args - Arguments to find a Formimpuestodiferido
     * @example
     * // Get one Formimpuestodiferido
     * const formimpuestodiferido = await prisma.formimpuestodiferido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formimpuestodiferidoFindFirstArgs>(args?: SelectSubset<T, formimpuestodiferidoFindFirstArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formimpuestodiferido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formimpuestodiferidoFindFirstOrThrowArgs} args - Arguments to find a Formimpuestodiferido
     * @example
     * // Get one Formimpuestodiferido
     * const formimpuestodiferido = await prisma.formimpuestodiferido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formimpuestodiferidoFindFirstOrThrowArgs>(args?: SelectSubset<T, formimpuestodiferidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formimpuestodiferidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formimpuestodiferidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formimpuestodiferidos
     * const formimpuestodiferidos = await prisma.formimpuestodiferido.findMany()
     * 
     * // Get first 10 Formimpuestodiferidos
     * const formimpuestodiferidos = await prisma.formimpuestodiferido.findMany({ take: 10 })
     * 
     * // Only select the `impID`
     * const formimpuestodiferidoWithImpIDOnly = await prisma.formimpuestodiferido.findMany({ select: { impID: true } })
     * 
     */
    findMany<T extends formimpuestodiferidoFindManyArgs>(args?: SelectSubset<T, formimpuestodiferidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formimpuestodiferido.
     * @param {formimpuestodiferidoCreateArgs} args - Arguments to create a Formimpuestodiferido.
     * @example
     * // Create one Formimpuestodiferido
     * const Formimpuestodiferido = await prisma.formimpuestodiferido.create({
     *   data: {
     *     // ... data to create a Formimpuestodiferido
     *   }
     * })
     * 
     */
    create<T extends formimpuestodiferidoCreateArgs>(args: SelectSubset<T, formimpuestodiferidoCreateArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formimpuestodiferidos.
     * @param {formimpuestodiferidoCreateManyArgs} args - Arguments to create many Formimpuestodiferidos.
     * @example
     * // Create many Formimpuestodiferidos
     * const formimpuestodiferido = await prisma.formimpuestodiferido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formimpuestodiferidoCreateManyArgs>(args?: SelectSubset<T, formimpuestodiferidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formimpuestodiferido.
     * @param {formimpuestodiferidoDeleteArgs} args - Arguments to delete one Formimpuestodiferido.
     * @example
     * // Delete one Formimpuestodiferido
     * const Formimpuestodiferido = await prisma.formimpuestodiferido.delete({
     *   where: {
     *     // ... filter to delete one Formimpuestodiferido
     *   }
     * })
     * 
     */
    delete<T extends formimpuestodiferidoDeleteArgs>(args: SelectSubset<T, formimpuestodiferidoDeleteArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formimpuestodiferido.
     * @param {formimpuestodiferidoUpdateArgs} args - Arguments to update one Formimpuestodiferido.
     * @example
     * // Update one Formimpuestodiferido
     * const formimpuestodiferido = await prisma.formimpuestodiferido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formimpuestodiferidoUpdateArgs>(args: SelectSubset<T, formimpuestodiferidoUpdateArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formimpuestodiferidos.
     * @param {formimpuestodiferidoDeleteManyArgs} args - Arguments to filter Formimpuestodiferidos to delete.
     * @example
     * // Delete a few Formimpuestodiferidos
     * const { count } = await prisma.formimpuestodiferido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formimpuestodiferidoDeleteManyArgs>(args?: SelectSubset<T, formimpuestodiferidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formimpuestodiferidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formimpuestodiferidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formimpuestodiferidos
     * const formimpuestodiferido = await prisma.formimpuestodiferido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formimpuestodiferidoUpdateManyArgs>(args: SelectSubset<T, formimpuestodiferidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formimpuestodiferido.
     * @param {formimpuestodiferidoUpsertArgs} args - Arguments to update or create a Formimpuestodiferido.
     * @example
     * // Update or create a Formimpuestodiferido
     * const formimpuestodiferido = await prisma.formimpuestodiferido.upsert({
     *   create: {
     *     // ... data to create a Formimpuestodiferido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formimpuestodiferido we want to update
     *   }
     * })
     */
    upsert<T extends formimpuestodiferidoUpsertArgs>(args: SelectSubset<T, formimpuestodiferidoUpsertArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formimpuestodiferidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formimpuestodiferidoCountArgs} args - Arguments to filter Formimpuestodiferidos to count.
     * @example
     * // Count the number of Formimpuestodiferidos
     * const count = await prisma.formimpuestodiferido.count({
     *   where: {
     *     // ... the filter for the Formimpuestodiferidos we want to count
     *   }
     * })
    **/
    count<T extends formimpuestodiferidoCountArgs>(
      args?: Subset<T, formimpuestodiferidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormimpuestodiferidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formimpuestodiferido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormimpuestodiferidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormimpuestodiferidoAggregateArgs>(args: Subset<T, FormimpuestodiferidoAggregateArgs>): Prisma.PrismaPromise<GetFormimpuestodiferidoAggregateType<T>>

    /**
     * Group by Formimpuestodiferido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formimpuestodiferidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formimpuestodiferidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formimpuestodiferidoGroupByArgs['orderBy'] }
        : { orderBy?: formimpuestodiferidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formimpuestodiferidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormimpuestodiferidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formimpuestodiferido model
   */
  readonly fields: formimpuestodiferidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formimpuestodiferido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formimpuestodiferidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formimpuestodiferido$reportArgs<ExtArgs> = {}>(args?: Subset<T, formimpuestodiferido$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formimpuestodiferido model
   */
  interface formimpuestodiferidoFieldRefs {
    readonly impID: FieldRef<"formimpuestodiferido", 'String'>
    readonly impContent: FieldRef<"formimpuestodiferido", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formimpuestodiferido findUnique
   */
  export type formimpuestodiferidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * Filter, which formimpuestodiferido to fetch.
     */
    where: formimpuestodiferidoWhereUniqueInput
  }

  /**
   * formimpuestodiferido findUniqueOrThrow
   */
  export type formimpuestodiferidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * Filter, which formimpuestodiferido to fetch.
     */
    where: formimpuestodiferidoWhereUniqueInput
  }

  /**
   * formimpuestodiferido findFirst
   */
  export type formimpuestodiferidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * Filter, which formimpuestodiferido to fetch.
     */
    where?: formimpuestodiferidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formimpuestodiferidos to fetch.
     */
    orderBy?: formimpuestodiferidoOrderByWithRelationInput | formimpuestodiferidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formimpuestodiferidos.
     */
    cursor?: formimpuestodiferidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formimpuestodiferidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formimpuestodiferidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formimpuestodiferidos.
     */
    distinct?: FormimpuestodiferidoScalarFieldEnum | FormimpuestodiferidoScalarFieldEnum[]
  }

  /**
   * formimpuestodiferido findFirstOrThrow
   */
  export type formimpuestodiferidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * Filter, which formimpuestodiferido to fetch.
     */
    where?: formimpuestodiferidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formimpuestodiferidos to fetch.
     */
    orderBy?: formimpuestodiferidoOrderByWithRelationInput | formimpuestodiferidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formimpuestodiferidos.
     */
    cursor?: formimpuestodiferidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formimpuestodiferidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formimpuestodiferidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formimpuestodiferidos.
     */
    distinct?: FormimpuestodiferidoScalarFieldEnum | FormimpuestodiferidoScalarFieldEnum[]
  }

  /**
   * formimpuestodiferido findMany
   */
  export type formimpuestodiferidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * Filter, which formimpuestodiferidos to fetch.
     */
    where?: formimpuestodiferidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formimpuestodiferidos to fetch.
     */
    orderBy?: formimpuestodiferidoOrderByWithRelationInput | formimpuestodiferidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formimpuestodiferidos.
     */
    cursor?: formimpuestodiferidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formimpuestodiferidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formimpuestodiferidos.
     */
    skip?: number
    distinct?: FormimpuestodiferidoScalarFieldEnum | FormimpuestodiferidoScalarFieldEnum[]
  }

  /**
   * formimpuestodiferido create
   */
  export type formimpuestodiferidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * The data needed to create a formimpuestodiferido.
     */
    data: XOR<formimpuestodiferidoCreateInput, formimpuestodiferidoUncheckedCreateInput>
  }

  /**
   * formimpuestodiferido createMany
   */
  export type formimpuestodiferidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formimpuestodiferidos.
     */
    data: formimpuestodiferidoCreateManyInput | formimpuestodiferidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formimpuestodiferido update
   */
  export type formimpuestodiferidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * The data needed to update a formimpuestodiferido.
     */
    data: XOR<formimpuestodiferidoUpdateInput, formimpuestodiferidoUncheckedUpdateInput>
    /**
     * Choose, which formimpuestodiferido to update.
     */
    where: formimpuestodiferidoWhereUniqueInput
  }

  /**
   * formimpuestodiferido updateMany
   */
  export type formimpuestodiferidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formimpuestodiferidos.
     */
    data: XOR<formimpuestodiferidoUpdateManyMutationInput, formimpuestodiferidoUncheckedUpdateManyInput>
    /**
     * Filter which formimpuestodiferidos to update
     */
    where?: formimpuestodiferidoWhereInput
    /**
     * Limit how many formimpuestodiferidos to update.
     */
    limit?: number
  }

  /**
   * formimpuestodiferido upsert
   */
  export type formimpuestodiferidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * The filter to search for the formimpuestodiferido to update in case it exists.
     */
    where: formimpuestodiferidoWhereUniqueInput
    /**
     * In case the formimpuestodiferido found by the `where` argument doesn't exist, create a new formimpuestodiferido with this data.
     */
    create: XOR<formimpuestodiferidoCreateInput, formimpuestodiferidoUncheckedCreateInput>
    /**
     * In case the formimpuestodiferido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formimpuestodiferidoUpdateInput, formimpuestodiferidoUncheckedUpdateInput>
  }

  /**
   * formimpuestodiferido delete
   */
  export type formimpuestodiferidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
    /**
     * Filter which formimpuestodiferido to delete.
     */
    where: formimpuestodiferidoWhereUniqueInput
  }

  /**
   * formimpuestodiferido deleteMany
   */
  export type formimpuestodiferidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formimpuestodiferidos to delete
     */
    where?: formimpuestodiferidoWhereInput
    /**
     * Limit how many formimpuestodiferidos to delete.
     */
    limit?: number
  }

  /**
   * formimpuestodiferido.report
   */
  export type formimpuestodiferido$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formimpuestodiferido without action
   */
  export type formimpuestodiferidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formimpuestodiferido
     */
    select?: formimpuestodiferidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formimpuestodiferido
     */
    omit?: formimpuestodiferidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formimpuestodiferidoInclude<ExtArgs> | null
  }


  /**
   * Model formingresosfancturacion
   */

  export type AggregateFormingresosfancturacion = {
    _count: FormingresosfancturacionCountAggregateOutputType | null
    _min: FormingresosfancturacionMinAggregateOutputType | null
    _max: FormingresosfancturacionMaxAggregateOutputType | null
  }

  export type FormingresosfancturacionMinAggregateOutputType = {
    ingID: string | null
  }

  export type FormingresosfancturacionMaxAggregateOutputType = {
    ingID: string | null
  }

  export type FormingresosfancturacionCountAggregateOutputType = {
    ingID: number
    ingContent: number
    _all: number
  }


  export type FormingresosfancturacionMinAggregateInputType = {
    ingID?: true
  }

  export type FormingresosfancturacionMaxAggregateInputType = {
    ingID?: true
  }

  export type FormingresosfancturacionCountAggregateInputType = {
    ingID?: true
    ingContent?: true
    _all?: true
  }

  export type FormingresosfancturacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formingresosfancturacion to aggregate.
     */
    where?: formingresosfancturacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formingresosfancturacions to fetch.
     */
    orderBy?: formingresosfancturacionOrderByWithRelationInput | formingresosfancturacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formingresosfancturacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formingresosfancturacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formingresosfancturacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formingresosfancturacions
    **/
    _count?: true | FormingresosfancturacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormingresosfancturacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormingresosfancturacionMaxAggregateInputType
  }

  export type GetFormingresosfancturacionAggregateType<T extends FormingresosfancturacionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormingresosfancturacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormingresosfancturacion[P]>
      : GetScalarType<T[P], AggregateFormingresosfancturacion[P]>
  }




  export type formingresosfancturacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formingresosfancturacionWhereInput
    orderBy?: formingresosfancturacionOrderByWithAggregationInput | formingresosfancturacionOrderByWithAggregationInput[]
    by: FormingresosfancturacionScalarFieldEnum[] | FormingresosfancturacionScalarFieldEnum
    having?: formingresosfancturacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormingresosfancturacionCountAggregateInputType | true
    _min?: FormingresosfancturacionMinAggregateInputType
    _max?: FormingresosfancturacionMaxAggregateInputType
  }

  export type FormingresosfancturacionGroupByOutputType = {
    ingID: string
    ingContent: JsonValue
    _count: FormingresosfancturacionCountAggregateOutputType | null
    _min: FormingresosfancturacionMinAggregateOutputType | null
    _max: FormingresosfancturacionMaxAggregateOutputType | null
  }

  type GetFormingresosfancturacionGroupByPayload<T extends formingresosfancturacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormingresosfancturacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormingresosfancturacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormingresosfancturacionGroupByOutputType[P]>
            : GetScalarType<T[P], FormingresosfancturacionGroupByOutputType[P]>
        }
      >
    >


  export type formingresosfancturacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingID?: boolean
    ingContent?: boolean
    report?: boolean | formingresosfancturacion$reportArgs<ExtArgs>
    _count?: boolean | FormingresosfancturacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formingresosfancturacion"]>



  export type formingresosfancturacionSelectScalar = {
    ingID?: boolean
    ingContent?: boolean
  }

  export type formingresosfancturacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ingID" | "ingContent", ExtArgs["result"]["formingresosfancturacion"]>
  export type formingresosfancturacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formingresosfancturacion$reportArgs<ExtArgs>
    _count?: boolean | FormingresosfancturacionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formingresosfancturacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formingresosfancturacion"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ingID: string
      ingContent: Prisma.JsonValue
    }, ExtArgs["result"]["formingresosfancturacion"]>
    composites: {}
  }

  type formingresosfancturacionGetPayload<S extends boolean | null | undefined | formingresosfancturacionDefaultArgs> = $Result.GetResult<Prisma.$formingresosfancturacionPayload, S>

  type formingresosfancturacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formingresosfancturacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormingresosfancturacionCountAggregateInputType | true
    }

  export interface formingresosfancturacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formingresosfancturacion'], meta: { name: 'formingresosfancturacion' } }
    /**
     * Find zero or one Formingresosfancturacion that matches the filter.
     * @param {formingresosfancturacionFindUniqueArgs} args - Arguments to find a Formingresosfancturacion
     * @example
     * // Get one Formingresosfancturacion
     * const formingresosfancturacion = await prisma.formingresosfancturacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formingresosfancturacionFindUniqueArgs>(args: SelectSubset<T, formingresosfancturacionFindUniqueArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formingresosfancturacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formingresosfancturacionFindUniqueOrThrowArgs} args - Arguments to find a Formingresosfancturacion
     * @example
     * // Get one Formingresosfancturacion
     * const formingresosfancturacion = await prisma.formingresosfancturacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formingresosfancturacionFindUniqueOrThrowArgs>(args: SelectSubset<T, formingresosfancturacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formingresosfancturacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formingresosfancturacionFindFirstArgs} args - Arguments to find a Formingresosfancturacion
     * @example
     * // Get one Formingresosfancturacion
     * const formingresosfancturacion = await prisma.formingresosfancturacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formingresosfancturacionFindFirstArgs>(args?: SelectSubset<T, formingresosfancturacionFindFirstArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formingresosfancturacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formingresosfancturacionFindFirstOrThrowArgs} args - Arguments to find a Formingresosfancturacion
     * @example
     * // Get one Formingresosfancturacion
     * const formingresosfancturacion = await prisma.formingresosfancturacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formingresosfancturacionFindFirstOrThrowArgs>(args?: SelectSubset<T, formingresosfancturacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formingresosfancturacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formingresosfancturacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formingresosfancturacions
     * const formingresosfancturacions = await prisma.formingresosfancturacion.findMany()
     * 
     * // Get first 10 Formingresosfancturacions
     * const formingresosfancturacions = await prisma.formingresosfancturacion.findMany({ take: 10 })
     * 
     * // Only select the `ingID`
     * const formingresosfancturacionWithIngIDOnly = await prisma.formingresosfancturacion.findMany({ select: { ingID: true } })
     * 
     */
    findMany<T extends formingresosfancturacionFindManyArgs>(args?: SelectSubset<T, formingresosfancturacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formingresosfancturacion.
     * @param {formingresosfancturacionCreateArgs} args - Arguments to create a Formingresosfancturacion.
     * @example
     * // Create one Formingresosfancturacion
     * const Formingresosfancturacion = await prisma.formingresosfancturacion.create({
     *   data: {
     *     // ... data to create a Formingresosfancturacion
     *   }
     * })
     * 
     */
    create<T extends formingresosfancturacionCreateArgs>(args: SelectSubset<T, formingresosfancturacionCreateArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formingresosfancturacions.
     * @param {formingresosfancturacionCreateManyArgs} args - Arguments to create many Formingresosfancturacions.
     * @example
     * // Create many Formingresosfancturacions
     * const formingresosfancturacion = await prisma.formingresosfancturacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formingresosfancturacionCreateManyArgs>(args?: SelectSubset<T, formingresosfancturacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formingresosfancturacion.
     * @param {formingresosfancturacionDeleteArgs} args - Arguments to delete one Formingresosfancturacion.
     * @example
     * // Delete one Formingresosfancturacion
     * const Formingresosfancturacion = await prisma.formingresosfancturacion.delete({
     *   where: {
     *     // ... filter to delete one Formingresosfancturacion
     *   }
     * })
     * 
     */
    delete<T extends formingresosfancturacionDeleteArgs>(args: SelectSubset<T, formingresosfancturacionDeleteArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formingresosfancturacion.
     * @param {formingresosfancturacionUpdateArgs} args - Arguments to update one Formingresosfancturacion.
     * @example
     * // Update one Formingresosfancturacion
     * const formingresosfancturacion = await prisma.formingresosfancturacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formingresosfancturacionUpdateArgs>(args: SelectSubset<T, formingresosfancturacionUpdateArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formingresosfancturacions.
     * @param {formingresosfancturacionDeleteManyArgs} args - Arguments to filter Formingresosfancturacions to delete.
     * @example
     * // Delete a few Formingresosfancturacions
     * const { count } = await prisma.formingresosfancturacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formingresosfancturacionDeleteManyArgs>(args?: SelectSubset<T, formingresosfancturacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formingresosfancturacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formingresosfancturacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formingresosfancturacions
     * const formingresosfancturacion = await prisma.formingresosfancturacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formingresosfancturacionUpdateManyArgs>(args: SelectSubset<T, formingresosfancturacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formingresosfancturacion.
     * @param {formingresosfancturacionUpsertArgs} args - Arguments to update or create a Formingresosfancturacion.
     * @example
     * // Update or create a Formingresosfancturacion
     * const formingresosfancturacion = await prisma.formingresosfancturacion.upsert({
     *   create: {
     *     // ... data to create a Formingresosfancturacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formingresosfancturacion we want to update
     *   }
     * })
     */
    upsert<T extends formingresosfancturacionUpsertArgs>(args: SelectSubset<T, formingresosfancturacionUpsertArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formingresosfancturacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formingresosfancturacionCountArgs} args - Arguments to filter Formingresosfancturacions to count.
     * @example
     * // Count the number of Formingresosfancturacions
     * const count = await prisma.formingresosfancturacion.count({
     *   where: {
     *     // ... the filter for the Formingresosfancturacions we want to count
     *   }
     * })
    **/
    count<T extends formingresosfancturacionCountArgs>(
      args?: Subset<T, formingresosfancturacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormingresosfancturacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formingresosfancturacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormingresosfancturacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormingresosfancturacionAggregateArgs>(args: Subset<T, FormingresosfancturacionAggregateArgs>): Prisma.PrismaPromise<GetFormingresosfancturacionAggregateType<T>>

    /**
     * Group by Formingresosfancturacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formingresosfancturacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formingresosfancturacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formingresosfancturacionGroupByArgs['orderBy'] }
        : { orderBy?: formingresosfancturacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formingresosfancturacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormingresosfancturacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formingresosfancturacion model
   */
  readonly fields: formingresosfancturacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formingresosfancturacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formingresosfancturacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formingresosfancturacion$reportArgs<ExtArgs> = {}>(args?: Subset<T, formingresosfancturacion$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formingresosfancturacion model
   */
  interface formingresosfancturacionFieldRefs {
    readonly ingID: FieldRef<"formingresosfancturacion", 'String'>
    readonly ingContent: FieldRef<"formingresosfancturacion", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formingresosfancturacion findUnique
   */
  export type formingresosfancturacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * Filter, which formingresosfancturacion to fetch.
     */
    where: formingresosfancturacionWhereUniqueInput
  }

  /**
   * formingresosfancturacion findUniqueOrThrow
   */
  export type formingresosfancturacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * Filter, which formingresosfancturacion to fetch.
     */
    where: formingresosfancturacionWhereUniqueInput
  }

  /**
   * formingresosfancturacion findFirst
   */
  export type formingresosfancturacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * Filter, which formingresosfancturacion to fetch.
     */
    where?: formingresosfancturacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formingresosfancturacions to fetch.
     */
    orderBy?: formingresosfancturacionOrderByWithRelationInput | formingresosfancturacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formingresosfancturacions.
     */
    cursor?: formingresosfancturacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formingresosfancturacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formingresosfancturacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formingresosfancturacions.
     */
    distinct?: FormingresosfancturacionScalarFieldEnum | FormingresosfancturacionScalarFieldEnum[]
  }

  /**
   * formingresosfancturacion findFirstOrThrow
   */
  export type formingresosfancturacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * Filter, which formingresosfancturacion to fetch.
     */
    where?: formingresosfancturacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formingresosfancturacions to fetch.
     */
    orderBy?: formingresosfancturacionOrderByWithRelationInput | formingresosfancturacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formingresosfancturacions.
     */
    cursor?: formingresosfancturacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formingresosfancturacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formingresosfancturacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formingresosfancturacions.
     */
    distinct?: FormingresosfancturacionScalarFieldEnum | FormingresosfancturacionScalarFieldEnum[]
  }

  /**
   * formingresosfancturacion findMany
   */
  export type formingresosfancturacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * Filter, which formingresosfancturacions to fetch.
     */
    where?: formingresosfancturacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formingresosfancturacions to fetch.
     */
    orderBy?: formingresosfancturacionOrderByWithRelationInput | formingresosfancturacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formingresosfancturacions.
     */
    cursor?: formingresosfancturacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formingresosfancturacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formingresosfancturacions.
     */
    skip?: number
    distinct?: FormingresosfancturacionScalarFieldEnum | FormingresosfancturacionScalarFieldEnum[]
  }

  /**
   * formingresosfancturacion create
   */
  export type formingresosfancturacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * The data needed to create a formingresosfancturacion.
     */
    data: XOR<formingresosfancturacionCreateInput, formingresosfancturacionUncheckedCreateInput>
  }

  /**
   * formingresosfancturacion createMany
   */
  export type formingresosfancturacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formingresosfancturacions.
     */
    data: formingresosfancturacionCreateManyInput | formingresosfancturacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formingresosfancturacion update
   */
  export type formingresosfancturacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * The data needed to update a formingresosfancturacion.
     */
    data: XOR<formingresosfancturacionUpdateInput, formingresosfancturacionUncheckedUpdateInput>
    /**
     * Choose, which formingresosfancturacion to update.
     */
    where: formingresosfancturacionWhereUniqueInput
  }

  /**
   * formingresosfancturacion updateMany
   */
  export type formingresosfancturacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formingresosfancturacions.
     */
    data: XOR<formingresosfancturacionUpdateManyMutationInput, formingresosfancturacionUncheckedUpdateManyInput>
    /**
     * Filter which formingresosfancturacions to update
     */
    where?: formingresosfancturacionWhereInput
    /**
     * Limit how many formingresosfancturacions to update.
     */
    limit?: number
  }

  /**
   * formingresosfancturacion upsert
   */
  export type formingresosfancturacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * The filter to search for the formingresosfancturacion to update in case it exists.
     */
    where: formingresosfancturacionWhereUniqueInput
    /**
     * In case the formingresosfancturacion found by the `where` argument doesn't exist, create a new formingresosfancturacion with this data.
     */
    create: XOR<formingresosfancturacionCreateInput, formingresosfancturacionUncheckedCreateInput>
    /**
     * In case the formingresosfancturacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formingresosfancturacionUpdateInput, formingresosfancturacionUncheckedUpdateInput>
  }

  /**
   * formingresosfancturacion delete
   */
  export type formingresosfancturacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
    /**
     * Filter which formingresosfancturacion to delete.
     */
    where: formingresosfancturacionWhereUniqueInput
  }

  /**
   * formingresosfancturacion deleteMany
   */
  export type formingresosfancturacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formingresosfancturacions to delete
     */
    where?: formingresosfancturacionWhereInput
    /**
     * Limit how many formingresosfancturacions to delete.
     */
    limit?: number
  }

  /**
   * formingresosfancturacion.report
   */
  export type formingresosfancturacion$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formingresosfancturacion without action
   */
  export type formingresosfancturacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formingresosfancturacion
     */
    select?: formingresosfancturacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formingresosfancturacion
     */
    omit?: formingresosfancturacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formingresosfancturacionInclude<ExtArgs> | null
  }


  /**
   * Model formr110
   */

  export type AggregateFormr110 = {
    _count: Formr110CountAggregateOutputType | null
    _min: Formr110MinAggregateOutputType | null
    _max: Formr110MaxAggregateOutputType | null
  }

  export type Formr110MinAggregateOutputType = {
    r110ID: string | null
  }

  export type Formr110MaxAggregateOutputType = {
    r110ID: string | null
  }

  export type Formr110CountAggregateOutputType = {
    r110ID: number
    r110Content: number
    _all: number
  }


  export type Formr110MinAggregateInputType = {
    r110ID?: true
  }

  export type Formr110MaxAggregateInputType = {
    r110ID?: true
  }

  export type Formr110CountAggregateInputType = {
    r110ID?: true
    r110Content?: true
    _all?: true
  }

  export type Formr110AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formr110 to aggregate.
     */
    where?: formr110WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formr110s to fetch.
     */
    orderBy?: formr110OrderByWithRelationInput | formr110OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formr110WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formr110s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formr110s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formr110s
    **/
    _count?: true | Formr110CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Formr110MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Formr110MaxAggregateInputType
  }

  export type GetFormr110AggregateType<T extends Formr110AggregateArgs> = {
        [P in keyof T & keyof AggregateFormr110]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormr110[P]>
      : GetScalarType<T[P], AggregateFormr110[P]>
  }




  export type formr110GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formr110WhereInput
    orderBy?: formr110OrderByWithAggregationInput | formr110OrderByWithAggregationInput[]
    by: Formr110ScalarFieldEnum[] | Formr110ScalarFieldEnum
    having?: formr110ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Formr110CountAggregateInputType | true
    _min?: Formr110MinAggregateInputType
    _max?: Formr110MaxAggregateInputType
  }

  export type Formr110GroupByOutputType = {
    r110ID: string
    r110Content: JsonValue
    _count: Formr110CountAggregateOutputType | null
    _min: Formr110MinAggregateOutputType | null
    _max: Formr110MaxAggregateOutputType | null
  }

  type GetFormr110GroupByPayload<T extends formr110GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Formr110GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Formr110GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Formr110GroupByOutputType[P]>
            : GetScalarType<T[P], Formr110GroupByOutputType[P]>
        }
      >
    >


  export type formr110Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    r110ID?: boolean
    r110Content?: boolean
    report?: boolean | formr110$reportArgs<ExtArgs>
    _count?: boolean | Formr110CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formr110"]>



  export type formr110SelectScalar = {
    r110ID?: boolean
    r110Content?: boolean
  }

  export type formr110Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"r110ID" | "r110Content", ExtArgs["result"]["formr110"]>
  export type formr110Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formr110$reportArgs<ExtArgs>
    _count?: boolean | Formr110CountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formr110Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formr110"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      r110ID: string
      r110Content: Prisma.JsonValue
    }, ExtArgs["result"]["formr110"]>
    composites: {}
  }

  type formr110GetPayload<S extends boolean | null | undefined | formr110DefaultArgs> = $Result.GetResult<Prisma.$formr110Payload, S>

  type formr110CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formr110FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Formr110CountAggregateInputType | true
    }

  export interface formr110Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formr110'], meta: { name: 'formr110' } }
    /**
     * Find zero or one Formr110 that matches the filter.
     * @param {formr110FindUniqueArgs} args - Arguments to find a Formr110
     * @example
     * // Get one Formr110
     * const formr110 = await prisma.formr110.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formr110FindUniqueArgs>(args: SelectSubset<T, formr110FindUniqueArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formr110 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formr110FindUniqueOrThrowArgs} args - Arguments to find a Formr110
     * @example
     * // Get one Formr110
     * const formr110 = await prisma.formr110.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formr110FindUniqueOrThrowArgs>(args: SelectSubset<T, formr110FindUniqueOrThrowArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formr110 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formr110FindFirstArgs} args - Arguments to find a Formr110
     * @example
     * // Get one Formr110
     * const formr110 = await prisma.formr110.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formr110FindFirstArgs>(args?: SelectSubset<T, formr110FindFirstArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formr110 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formr110FindFirstOrThrowArgs} args - Arguments to find a Formr110
     * @example
     * // Get one Formr110
     * const formr110 = await prisma.formr110.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formr110FindFirstOrThrowArgs>(args?: SelectSubset<T, formr110FindFirstOrThrowArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formr110s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formr110FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formr110s
     * const formr110s = await prisma.formr110.findMany()
     * 
     * // Get first 10 Formr110s
     * const formr110s = await prisma.formr110.findMany({ take: 10 })
     * 
     * // Only select the `r110ID`
     * const formr110WithR110IDOnly = await prisma.formr110.findMany({ select: { r110ID: true } })
     * 
     */
    findMany<T extends formr110FindManyArgs>(args?: SelectSubset<T, formr110FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formr110.
     * @param {formr110CreateArgs} args - Arguments to create a Formr110.
     * @example
     * // Create one Formr110
     * const Formr110 = await prisma.formr110.create({
     *   data: {
     *     // ... data to create a Formr110
     *   }
     * })
     * 
     */
    create<T extends formr110CreateArgs>(args: SelectSubset<T, formr110CreateArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formr110s.
     * @param {formr110CreateManyArgs} args - Arguments to create many Formr110s.
     * @example
     * // Create many Formr110s
     * const formr110 = await prisma.formr110.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formr110CreateManyArgs>(args?: SelectSubset<T, formr110CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formr110.
     * @param {formr110DeleteArgs} args - Arguments to delete one Formr110.
     * @example
     * // Delete one Formr110
     * const Formr110 = await prisma.formr110.delete({
     *   where: {
     *     // ... filter to delete one Formr110
     *   }
     * })
     * 
     */
    delete<T extends formr110DeleteArgs>(args: SelectSubset<T, formr110DeleteArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formr110.
     * @param {formr110UpdateArgs} args - Arguments to update one Formr110.
     * @example
     * // Update one Formr110
     * const formr110 = await prisma.formr110.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formr110UpdateArgs>(args: SelectSubset<T, formr110UpdateArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formr110s.
     * @param {formr110DeleteManyArgs} args - Arguments to filter Formr110s to delete.
     * @example
     * // Delete a few Formr110s
     * const { count } = await prisma.formr110.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formr110DeleteManyArgs>(args?: SelectSubset<T, formr110DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formr110s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formr110UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formr110s
     * const formr110 = await prisma.formr110.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formr110UpdateManyArgs>(args: SelectSubset<T, formr110UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formr110.
     * @param {formr110UpsertArgs} args - Arguments to update or create a Formr110.
     * @example
     * // Update or create a Formr110
     * const formr110 = await prisma.formr110.upsert({
     *   create: {
     *     // ... data to create a Formr110
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formr110 we want to update
     *   }
     * })
     */
    upsert<T extends formr110UpsertArgs>(args: SelectSubset<T, formr110UpsertArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formr110s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formr110CountArgs} args - Arguments to filter Formr110s to count.
     * @example
     * // Count the number of Formr110s
     * const count = await prisma.formr110.count({
     *   where: {
     *     // ... the filter for the Formr110s we want to count
     *   }
     * })
    **/
    count<T extends formr110CountArgs>(
      args?: Subset<T, formr110CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Formr110CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formr110.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formr110AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Formr110AggregateArgs>(args: Subset<T, Formr110AggregateArgs>): Prisma.PrismaPromise<GetFormr110AggregateType<T>>

    /**
     * Group by Formr110.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formr110GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formr110GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formr110GroupByArgs['orderBy'] }
        : { orderBy?: formr110GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formr110GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormr110GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formr110 model
   */
  readonly fields: formr110FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formr110.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formr110Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formr110$reportArgs<ExtArgs> = {}>(args?: Subset<T, formr110$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formr110 model
   */
  interface formr110FieldRefs {
    readonly r110ID: FieldRef<"formr110", 'String'>
    readonly r110Content: FieldRef<"formr110", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formr110 findUnique
   */
  export type formr110FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * Filter, which formr110 to fetch.
     */
    where: formr110WhereUniqueInput
  }

  /**
   * formr110 findUniqueOrThrow
   */
  export type formr110FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * Filter, which formr110 to fetch.
     */
    where: formr110WhereUniqueInput
  }

  /**
   * formr110 findFirst
   */
  export type formr110FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * Filter, which formr110 to fetch.
     */
    where?: formr110WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formr110s to fetch.
     */
    orderBy?: formr110OrderByWithRelationInput | formr110OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formr110s.
     */
    cursor?: formr110WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formr110s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formr110s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formr110s.
     */
    distinct?: Formr110ScalarFieldEnum | Formr110ScalarFieldEnum[]
  }

  /**
   * formr110 findFirstOrThrow
   */
  export type formr110FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * Filter, which formr110 to fetch.
     */
    where?: formr110WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formr110s to fetch.
     */
    orderBy?: formr110OrderByWithRelationInput | formr110OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formr110s.
     */
    cursor?: formr110WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formr110s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formr110s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formr110s.
     */
    distinct?: Formr110ScalarFieldEnum | Formr110ScalarFieldEnum[]
  }

  /**
   * formr110 findMany
   */
  export type formr110FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * Filter, which formr110s to fetch.
     */
    where?: formr110WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formr110s to fetch.
     */
    orderBy?: formr110OrderByWithRelationInput | formr110OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formr110s.
     */
    cursor?: formr110WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formr110s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formr110s.
     */
    skip?: number
    distinct?: Formr110ScalarFieldEnum | Formr110ScalarFieldEnum[]
  }

  /**
   * formr110 create
   */
  export type formr110CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * The data needed to create a formr110.
     */
    data: XOR<formr110CreateInput, formr110UncheckedCreateInput>
  }

  /**
   * formr110 createMany
   */
  export type formr110CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formr110s.
     */
    data: formr110CreateManyInput | formr110CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formr110 update
   */
  export type formr110UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * The data needed to update a formr110.
     */
    data: XOR<formr110UpdateInput, formr110UncheckedUpdateInput>
    /**
     * Choose, which formr110 to update.
     */
    where: formr110WhereUniqueInput
  }

  /**
   * formr110 updateMany
   */
  export type formr110UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formr110s.
     */
    data: XOR<formr110UpdateManyMutationInput, formr110UncheckedUpdateManyInput>
    /**
     * Filter which formr110s to update
     */
    where?: formr110WhereInput
    /**
     * Limit how many formr110s to update.
     */
    limit?: number
  }

  /**
   * formr110 upsert
   */
  export type formr110UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * The filter to search for the formr110 to update in case it exists.
     */
    where: formr110WhereUniqueInput
    /**
     * In case the formr110 found by the `where` argument doesn't exist, create a new formr110 with this data.
     */
    create: XOR<formr110CreateInput, formr110UncheckedCreateInput>
    /**
     * In case the formr110 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formr110UpdateInput, formr110UncheckedUpdateInput>
  }

  /**
   * formr110 delete
   */
  export type formr110DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
    /**
     * Filter which formr110 to delete.
     */
    where: formr110WhereUniqueInput
  }

  /**
   * formr110 deleteMany
   */
  export type formr110DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formr110s to delete
     */
    where?: formr110WhereInput
    /**
     * Limit how many formr110s to delete.
     */
    limit?: number
  }

  /**
   * formr110.report
   */
  export type formr110$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formr110 without action
   */
  export type formr110DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formr110
     */
    select?: formr110Select<ExtArgs> | null
    /**
     * Omit specific fields from the formr110
     */
    omit?: formr110Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formr110Include<ExtArgs> | null
  }


  /**
   * Model formrentaliquida
   */

  export type AggregateFormrentaliquida = {
    _count: FormrentaliquidaCountAggregateOutputType | null
    _min: FormrentaliquidaMinAggregateOutputType | null
    _max: FormrentaliquidaMaxAggregateOutputType | null
  }

  export type FormrentaliquidaMinAggregateOutputType = {
    renID: string | null
  }

  export type FormrentaliquidaMaxAggregateOutputType = {
    renID: string | null
  }

  export type FormrentaliquidaCountAggregateOutputType = {
    renID: number
    renContent: number
    _all: number
  }


  export type FormrentaliquidaMinAggregateInputType = {
    renID?: true
  }

  export type FormrentaliquidaMaxAggregateInputType = {
    renID?: true
  }

  export type FormrentaliquidaCountAggregateInputType = {
    renID?: true
    renContent?: true
    _all?: true
  }

  export type FormrentaliquidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formrentaliquida to aggregate.
     */
    where?: formrentaliquidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formrentaliquidas to fetch.
     */
    orderBy?: formrentaliquidaOrderByWithRelationInput | formrentaliquidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formrentaliquidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formrentaliquidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formrentaliquidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formrentaliquidas
    **/
    _count?: true | FormrentaliquidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormrentaliquidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormrentaliquidaMaxAggregateInputType
  }

  export type GetFormrentaliquidaAggregateType<T extends FormrentaliquidaAggregateArgs> = {
        [P in keyof T & keyof AggregateFormrentaliquida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormrentaliquida[P]>
      : GetScalarType<T[P], AggregateFormrentaliquida[P]>
  }




  export type formrentaliquidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formrentaliquidaWhereInput
    orderBy?: formrentaliquidaOrderByWithAggregationInput | formrentaliquidaOrderByWithAggregationInput[]
    by: FormrentaliquidaScalarFieldEnum[] | FormrentaliquidaScalarFieldEnum
    having?: formrentaliquidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormrentaliquidaCountAggregateInputType | true
    _min?: FormrentaliquidaMinAggregateInputType
    _max?: FormrentaliquidaMaxAggregateInputType
  }

  export type FormrentaliquidaGroupByOutputType = {
    renID: string
    renContent: JsonValue
    _count: FormrentaliquidaCountAggregateOutputType | null
    _min: FormrentaliquidaMinAggregateOutputType | null
    _max: FormrentaliquidaMaxAggregateOutputType | null
  }

  type GetFormrentaliquidaGroupByPayload<T extends formrentaliquidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormrentaliquidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormrentaliquidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormrentaliquidaGroupByOutputType[P]>
            : GetScalarType<T[P], FormrentaliquidaGroupByOutputType[P]>
        }
      >
    >


  export type formrentaliquidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    renID?: boolean
    renContent?: boolean
    report?: boolean | formrentaliquida$reportArgs<ExtArgs>
    _count?: boolean | FormrentaliquidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formrentaliquida"]>



  export type formrentaliquidaSelectScalar = {
    renID?: boolean
    renContent?: boolean
  }

  export type formrentaliquidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"renID" | "renContent", ExtArgs["result"]["formrentaliquida"]>
  export type formrentaliquidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formrentaliquida$reportArgs<ExtArgs>
    _count?: boolean | FormrentaliquidaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formrentaliquidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formrentaliquida"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      renID: string
      renContent: Prisma.JsonValue
    }, ExtArgs["result"]["formrentaliquida"]>
    composites: {}
  }

  type formrentaliquidaGetPayload<S extends boolean | null | undefined | formrentaliquidaDefaultArgs> = $Result.GetResult<Prisma.$formrentaliquidaPayload, S>

  type formrentaliquidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formrentaliquidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormrentaliquidaCountAggregateInputType | true
    }

  export interface formrentaliquidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formrentaliquida'], meta: { name: 'formrentaliquida' } }
    /**
     * Find zero or one Formrentaliquida that matches the filter.
     * @param {formrentaliquidaFindUniqueArgs} args - Arguments to find a Formrentaliquida
     * @example
     * // Get one Formrentaliquida
     * const formrentaliquida = await prisma.formrentaliquida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formrentaliquidaFindUniqueArgs>(args: SelectSubset<T, formrentaliquidaFindUniqueArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formrentaliquida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formrentaliquidaFindUniqueOrThrowArgs} args - Arguments to find a Formrentaliquida
     * @example
     * // Get one Formrentaliquida
     * const formrentaliquida = await prisma.formrentaliquida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formrentaliquidaFindUniqueOrThrowArgs>(args: SelectSubset<T, formrentaliquidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formrentaliquida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formrentaliquidaFindFirstArgs} args - Arguments to find a Formrentaliquida
     * @example
     * // Get one Formrentaliquida
     * const formrentaliquida = await prisma.formrentaliquida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formrentaliquidaFindFirstArgs>(args?: SelectSubset<T, formrentaliquidaFindFirstArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formrentaliquida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formrentaliquidaFindFirstOrThrowArgs} args - Arguments to find a Formrentaliquida
     * @example
     * // Get one Formrentaliquida
     * const formrentaliquida = await prisma.formrentaliquida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formrentaliquidaFindFirstOrThrowArgs>(args?: SelectSubset<T, formrentaliquidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formrentaliquidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formrentaliquidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formrentaliquidas
     * const formrentaliquidas = await prisma.formrentaliquida.findMany()
     * 
     * // Get first 10 Formrentaliquidas
     * const formrentaliquidas = await prisma.formrentaliquida.findMany({ take: 10 })
     * 
     * // Only select the `renID`
     * const formrentaliquidaWithRenIDOnly = await prisma.formrentaliquida.findMany({ select: { renID: true } })
     * 
     */
    findMany<T extends formrentaliquidaFindManyArgs>(args?: SelectSubset<T, formrentaliquidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formrentaliquida.
     * @param {formrentaliquidaCreateArgs} args - Arguments to create a Formrentaliquida.
     * @example
     * // Create one Formrentaliquida
     * const Formrentaliquida = await prisma.formrentaliquida.create({
     *   data: {
     *     // ... data to create a Formrentaliquida
     *   }
     * })
     * 
     */
    create<T extends formrentaliquidaCreateArgs>(args: SelectSubset<T, formrentaliquidaCreateArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formrentaliquidas.
     * @param {formrentaliquidaCreateManyArgs} args - Arguments to create many Formrentaliquidas.
     * @example
     * // Create many Formrentaliquidas
     * const formrentaliquida = await prisma.formrentaliquida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formrentaliquidaCreateManyArgs>(args?: SelectSubset<T, formrentaliquidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formrentaliquida.
     * @param {formrentaliquidaDeleteArgs} args - Arguments to delete one Formrentaliquida.
     * @example
     * // Delete one Formrentaliquida
     * const Formrentaliquida = await prisma.formrentaliquida.delete({
     *   where: {
     *     // ... filter to delete one Formrentaliquida
     *   }
     * })
     * 
     */
    delete<T extends formrentaliquidaDeleteArgs>(args: SelectSubset<T, formrentaliquidaDeleteArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formrentaliquida.
     * @param {formrentaliquidaUpdateArgs} args - Arguments to update one Formrentaliquida.
     * @example
     * // Update one Formrentaliquida
     * const formrentaliquida = await prisma.formrentaliquida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formrentaliquidaUpdateArgs>(args: SelectSubset<T, formrentaliquidaUpdateArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formrentaliquidas.
     * @param {formrentaliquidaDeleteManyArgs} args - Arguments to filter Formrentaliquidas to delete.
     * @example
     * // Delete a few Formrentaliquidas
     * const { count } = await prisma.formrentaliquida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formrentaliquidaDeleteManyArgs>(args?: SelectSubset<T, formrentaliquidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formrentaliquidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formrentaliquidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formrentaliquidas
     * const formrentaliquida = await prisma.formrentaliquida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formrentaliquidaUpdateManyArgs>(args: SelectSubset<T, formrentaliquidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formrentaliquida.
     * @param {formrentaliquidaUpsertArgs} args - Arguments to update or create a Formrentaliquida.
     * @example
     * // Update or create a Formrentaliquida
     * const formrentaliquida = await prisma.formrentaliquida.upsert({
     *   create: {
     *     // ... data to create a Formrentaliquida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formrentaliquida we want to update
     *   }
     * })
     */
    upsert<T extends formrentaliquidaUpsertArgs>(args: SelectSubset<T, formrentaliquidaUpsertArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formrentaliquidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formrentaliquidaCountArgs} args - Arguments to filter Formrentaliquidas to count.
     * @example
     * // Count the number of Formrentaliquidas
     * const count = await prisma.formrentaliquida.count({
     *   where: {
     *     // ... the filter for the Formrentaliquidas we want to count
     *   }
     * })
    **/
    count<T extends formrentaliquidaCountArgs>(
      args?: Subset<T, formrentaliquidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormrentaliquidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formrentaliquida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormrentaliquidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormrentaliquidaAggregateArgs>(args: Subset<T, FormrentaliquidaAggregateArgs>): Prisma.PrismaPromise<GetFormrentaliquidaAggregateType<T>>

    /**
     * Group by Formrentaliquida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formrentaliquidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formrentaliquidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formrentaliquidaGroupByArgs['orderBy'] }
        : { orderBy?: formrentaliquidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formrentaliquidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormrentaliquidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formrentaliquida model
   */
  readonly fields: formrentaliquidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formrentaliquida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formrentaliquidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formrentaliquida$reportArgs<ExtArgs> = {}>(args?: Subset<T, formrentaliquida$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formrentaliquida model
   */
  interface formrentaliquidaFieldRefs {
    readonly renID: FieldRef<"formrentaliquida", 'String'>
    readonly renContent: FieldRef<"formrentaliquida", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formrentaliquida findUnique
   */
  export type formrentaliquidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * Filter, which formrentaliquida to fetch.
     */
    where: formrentaliquidaWhereUniqueInput
  }

  /**
   * formrentaliquida findUniqueOrThrow
   */
  export type formrentaliquidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * Filter, which formrentaliquida to fetch.
     */
    where: formrentaliquidaWhereUniqueInput
  }

  /**
   * formrentaliquida findFirst
   */
  export type formrentaliquidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * Filter, which formrentaliquida to fetch.
     */
    where?: formrentaliquidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formrentaliquidas to fetch.
     */
    orderBy?: formrentaliquidaOrderByWithRelationInput | formrentaliquidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formrentaliquidas.
     */
    cursor?: formrentaliquidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formrentaliquidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formrentaliquidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formrentaliquidas.
     */
    distinct?: FormrentaliquidaScalarFieldEnum | FormrentaliquidaScalarFieldEnum[]
  }

  /**
   * formrentaliquida findFirstOrThrow
   */
  export type formrentaliquidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * Filter, which formrentaliquida to fetch.
     */
    where?: formrentaliquidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formrentaliquidas to fetch.
     */
    orderBy?: formrentaliquidaOrderByWithRelationInput | formrentaliquidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formrentaliquidas.
     */
    cursor?: formrentaliquidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formrentaliquidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formrentaliquidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formrentaliquidas.
     */
    distinct?: FormrentaliquidaScalarFieldEnum | FormrentaliquidaScalarFieldEnum[]
  }

  /**
   * formrentaliquida findMany
   */
  export type formrentaliquidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * Filter, which formrentaliquidas to fetch.
     */
    where?: formrentaliquidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formrentaliquidas to fetch.
     */
    orderBy?: formrentaliquidaOrderByWithRelationInput | formrentaliquidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formrentaliquidas.
     */
    cursor?: formrentaliquidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formrentaliquidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formrentaliquidas.
     */
    skip?: number
    distinct?: FormrentaliquidaScalarFieldEnum | FormrentaliquidaScalarFieldEnum[]
  }

  /**
   * formrentaliquida create
   */
  export type formrentaliquidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * The data needed to create a formrentaliquida.
     */
    data: XOR<formrentaliquidaCreateInput, formrentaliquidaUncheckedCreateInput>
  }

  /**
   * formrentaliquida createMany
   */
  export type formrentaliquidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formrentaliquidas.
     */
    data: formrentaliquidaCreateManyInput | formrentaliquidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formrentaliquida update
   */
  export type formrentaliquidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * The data needed to update a formrentaliquida.
     */
    data: XOR<formrentaliquidaUpdateInput, formrentaliquidaUncheckedUpdateInput>
    /**
     * Choose, which formrentaliquida to update.
     */
    where: formrentaliquidaWhereUniqueInput
  }

  /**
   * formrentaliquida updateMany
   */
  export type formrentaliquidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formrentaliquidas.
     */
    data: XOR<formrentaliquidaUpdateManyMutationInput, formrentaliquidaUncheckedUpdateManyInput>
    /**
     * Filter which formrentaliquidas to update
     */
    where?: formrentaliquidaWhereInput
    /**
     * Limit how many formrentaliquidas to update.
     */
    limit?: number
  }

  /**
   * formrentaliquida upsert
   */
  export type formrentaliquidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * The filter to search for the formrentaliquida to update in case it exists.
     */
    where: formrentaliquidaWhereUniqueInput
    /**
     * In case the formrentaliquida found by the `where` argument doesn't exist, create a new formrentaliquida with this data.
     */
    create: XOR<formrentaliquidaCreateInput, formrentaliquidaUncheckedCreateInput>
    /**
     * In case the formrentaliquida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formrentaliquidaUpdateInput, formrentaliquidaUncheckedUpdateInput>
  }

  /**
   * formrentaliquida delete
   */
  export type formrentaliquidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
    /**
     * Filter which formrentaliquida to delete.
     */
    where: formrentaliquidaWhereUniqueInput
  }

  /**
   * formrentaliquida deleteMany
   */
  export type formrentaliquidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formrentaliquidas to delete
     */
    where?: formrentaliquidaWhereInput
    /**
     * Limit how many formrentaliquidas to delete.
     */
    limit?: number
  }

  /**
   * formrentaliquida.report
   */
  export type formrentaliquida$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formrentaliquida without action
   */
  export type formrentaliquidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formrentaliquida
     */
    select?: formrentaliquidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formrentaliquida
     */
    omit?: formrentaliquidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formrentaliquidaInclude<ExtArgs> | null
  }


  /**
   * Model formresumenesferi
   */

  export type AggregateFormresumenesferi = {
    _count: FormresumenesferiCountAggregateOutputType | null
    _min: FormresumenesferiMinAggregateOutputType | null
    _max: FormresumenesferiMaxAggregateOutputType | null
  }

  export type FormresumenesferiMinAggregateOutputType = {
    resID: string | null
  }

  export type FormresumenesferiMaxAggregateOutputType = {
    resID: string | null
  }

  export type FormresumenesferiCountAggregateOutputType = {
    resID: number
    resContent: number
    _all: number
  }


  export type FormresumenesferiMinAggregateInputType = {
    resID?: true
  }

  export type FormresumenesferiMaxAggregateInputType = {
    resID?: true
  }

  export type FormresumenesferiCountAggregateInputType = {
    resID?: true
    resContent?: true
    _all?: true
  }

  export type FormresumenesferiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formresumenesferi to aggregate.
     */
    where?: formresumenesferiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formresumenesferis to fetch.
     */
    orderBy?: formresumenesferiOrderByWithRelationInput | formresumenesferiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formresumenesferiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formresumenesferis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formresumenesferis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formresumenesferis
    **/
    _count?: true | FormresumenesferiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormresumenesferiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormresumenesferiMaxAggregateInputType
  }

  export type GetFormresumenesferiAggregateType<T extends FormresumenesferiAggregateArgs> = {
        [P in keyof T & keyof AggregateFormresumenesferi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormresumenesferi[P]>
      : GetScalarType<T[P], AggregateFormresumenesferi[P]>
  }




  export type formresumenesferiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formresumenesferiWhereInput
    orderBy?: formresumenesferiOrderByWithAggregationInput | formresumenesferiOrderByWithAggregationInput[]
    by: FormresumenesferiScalarFieldEnum[] | FormresumenesferiScalarFieldEnum
    having?: formresumenesferiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormresumenesferiCountAggregateInputType | true
    _min?: FormresumenesferiMinAggregateInputType
    _max?: FormresumenesferiMaxAggregateInputType
  }

  export type FormresumenesferiGroupByOutputType = {
    resID: string
    resContent: JsonValue
    _count: FormresumenesferiCountAggregateOutputType | null
    _min: FormresumenesferiMinAggregateOutputType | null
    _max: FormresumenesferiMaxAggregateOutputType | null
  }

  type GetFormresumenesferiGroupByPayload<T extends formresumenesferiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormresumenesferiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormresumenesferiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormresumenesferiGroupByOutputType[P]>
            : GetScalarType<T[P], FormresumenesferiGroupByOutputType[P]>
        }
      >
    >


  export type formresumenesferiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    resID?: boolean
    resContent?: boolean
    report?: boolean | formresumenesferi$reportArgs<ExtArgs>
    _count?: boolean | FormresumenesferiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formresumenesferi"]>



  export type formresumenesferiSelectScalar = {
    resID?: boolean
    resContent?: boolean
  }

  export type formresumenesferiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"resID" | "resContent", ExtArgs["result"]["formresumenesferi"]>
  export type formresumenesferiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | formresumenesferi$reportArgs<ExtArgs>
    _count?: boolean | FormresumenesferiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formresumenesferiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formresumenesferi"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      resID: string
      resContent: Prisma.JsonValue
    }, ExtArgs["result"]["formresumenesferi"]>
    composites: {}
  }

  type formresumenesferiGetPayload<S extends boolean | null | undefined | formresumenesferiDefaultArgs> = $Result.GetResult<Prisma.$formresumenesferiPayload, S>

  type formresumenesferiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formresumenesferiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormresumenesferiCountAggregateInputType | true
    }

  export interface formresumenesferiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formresumenesferi'], meta: { name: 'formresumenesferi' } }
    /**
     * Find zero or one Formresumenesferi that matches the filter.
     * @param {formresumenesferiFindUniqueArgs} args - Arguments to find a Formresumenesferi
     * @example
     * // Get one Formresumenesferi
     * const formresumenesferi = await prisma.formresumenesferi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formresumenesferiFindUniqueArgs>(args: SelectSubset<T, formresumenesferiFindUniqueArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formresumenesferi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formresumenesferiFindUniqueOrThrowArgs} args - Arguments to find a Formresumenesferi
     * @example
     * // Get one Formresumenesferi
     * const formresumenesferi = await prisma.formresumenesferi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formresumenesferiFindUniqueOrThrowArgs>(args: SelectSubset<T, formresumenesferiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formresumenesferi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formresumenesferiFindFirstArgs} args - Arguments to find a Formresumenesferi
     * @example
     * // Get one Formresumenesferi
     * const formresumenesferi = await prisma.formresumenesferi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formresumenesferiFindFirstArgs>(args?: SelectSubset<T, formresumenesferiFindFirstArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formresumenesferi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formresumenesferiFindFirstOrThrowArgs} args - Arguments to find a Formresumenesferi
     * @example
     * // Get one Formresumenesferi
     * const formresumenesferi = await prisma.formresumenesferi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formresumenesferiFindFirstOrThrowArgs>(args?: SelectSubset<T, formresumenesferiFindFirstOrThrowArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formresumenesferis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formresumenesferiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formresumenesferis
     * const formresumenesferis = await prisma.formresumenesferi.findMany()
     * 
     * // Get first 10 Formresumenesferis
     * const formresumenesferis = await prisma.formresumenesferi.findMany({ take: 10 })
     * 
     * // Only select the `resID`
     * const formresumenesferiWithResIDOnly = await prisma.formresumenesferi.findMany({ select: { resID: true } })
     * 
     */
    findMany<T extends formresumenesferiFindManyArgs>(args?: SelectSubset<T, formresumenesferiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formresumenesferi.
     * @param {formresumenesferiCreateArgs} args - Arguments to create a Formresumenesferi.
     * @example
     * // Create one Formresumenesferi
     * const Formresumenesferi = await prisma.formresumenesferi.create({
     *   data: {
     *     // ... data to create a Formresumenesferi
     *   }
     * })
     * 
     */
    create<T extends formresumenesferiCreateArgs>(args: SelectSubset<T, formresumenesferiCreateArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formresumenesferis.
     * @param {formresumenesferiCreateManyArgs} args - Arguments to create many Formresumenesferis.
     * @example
     * // Create many Formresumenesferis
     * const formresumenesferi = await prisma.formresumenesferi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formresumenesferiCreateManyArgs>(args?: SelectSubset<T, formresumenesferiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formresumenesferi.
     * @param {formresumenesferiDeleteArgs} args - Arguments to delete one Formresumenesferi.
     * @example
     * // Delete one Formresumenesferi
     * const Formresumenesferi = await prisma.formresumenesferi.delete({
     *   where: {
     *     // ... filter to delete one Formresumenesferi
     *   }
     * })
     * 
     */
    delete<T extends formresumenesferiDeleteArgs>(args: SelectSubset<T, formresumenesferiDeleteArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formresumenesferi.
     * @param {formresumenesferiUpdateArgs} args - Arguments to update one Formresumenesferi.
     * @example
     * // Update one Formresumenesferi
     * const formresumenesferi = await prisma.formresumenesferi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formresumenesferiUpdateArgs>(args: SelectSubset<T, formresumenesferiUpdateArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formresumenesferis.
     * @param {formresumenesferiDeleteManyArgs} args - Arguments to filter Formresumenesferis to delete.
     * @example
     * // Delete a few Formresumenesferis
     * const { count } = await prisma.formresumenesferi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formresumenesferiDeleteManyArgs>(args?: SelectSubset<T, formresumenesferiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formresumenesferis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formresumenesferiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formresumenesferis
     * const formresumenesferi = await prisma.formresumenesferi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formresumenesferiUpdateManyArgs>(args: SelectSubset<T, formresumenesferiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formresumenesferi.
     * @param {formresumenesferiUpsertArgs} args - Arguments to update or create a Formresumenesferi.
     * @example
     * // Update or create a Formresumenesferi
     * const formresumenesferi = await prisma.formresumenesferi.upsert({
     *   create: {
     *     // ... data to create a Formresumenesferi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formresumenesferi we want to update
     *   }
     * })
     */
    upsert<T extends formresumenesferiUpsertArgs>(args: SelectSubset<T, formresumenesferiUpsertArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formresumenesferis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formresumenesferiCountArgs} args - Arguments to filter Formresumenesferis to count.
     * @example
     * // Count the number of Formresumenesferis
     * const count = await prisma.formresumenesferi.count({
     *   where: {
     *     // ... the filter for the Formresumenesferis we want to count
     *   }
     * })
    **/
    count<T extends formresumenesferiCountArgs>(
      args?: Subset<T, formresumenesferiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormresumenesferiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formresumenesferi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormresumenesferiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormresumenesferiAggregateArgs>(args: Subset<T, FormresumenesferiAggregateArgs>): Prisma.PrismaPromise<GetFormresumenesferiAggregateType<T>>

    /**
     * Group by Formresumenesferi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formresumenesferiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formresumenesferiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formresumenesferiGroupByArgs['orderBy'] }
        : { orderBy?: formresumenesferiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formresumenesferiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormresumenesferiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formresumenesferi model
   */
  readonly fields: formresumenesferiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formresumenesferi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formresumenesferiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends formresumenesferi$reportArgs<ExtArgs> = {}>(args?: Subset<T, formresumenesferi$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formresumenesferi model
   */
  interface formresumenesferiFieldRefs {
    readonly resID: FieldRef<"formresumenesferi", 'String'>
    readonly resContent: FieldRef<"formresumenesferi", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * formresumenesferi findUnique
   */
  export type formresumenesferiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * Filter, which formresumenesferi to fetch.
     */
    where: formresumenesferiWhereUniqueInput
  }

  /**
   * formresumenesferi findUniqueOrThrow
   */
  export type formresumenesferiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * Filter, which formresumenesferi to fetch.
     */
    where: formresumenesferiWhereUniqueInput
  }

  /**
   * formresumenesferi findFirst
   */
  export type formresumenesferiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * Filter, which formresumenesferi to fetch.
     */
    where?: formresumenesferiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formresumenesferis to fetch.
     */
    orderBy?: formresumenesferiOrderByWithRelationInput | formresumenesferiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formresumenesferis.
     */
    cursor?: formresumenesferiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formresumenesferis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formresumenesferis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formresumenesferis.
     */
    distinct?: FormresumenesferiScalarFieldEnum | FormresumenesferiScalarFieldEnum[]
  }

  /**
   * formresumenesferi findFirstOrThrow
   */
  export type formresumenesferiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * Filter, which formresumenesferi to fetch.
     */
    where?: formresumenesferiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formresumenesferis to fetch.
     */
    orderBy?: formresumenesferiOrderByWithRelationInput | formresumenesferiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formresumenesferis.
     */
    cursor?: formresumenesferiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formresumenesferis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formresumenesferis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formresumenesferis.
     */
    distinct?: FormresumenesferiScalarFieldEnum | FormresumenesferiScalarFieldEnum[]
  }

  /**
   * formresumenesferi findMany
   */
  export type formresumenesferiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * Filter, which formresumenesferis to fetch.
     */
    where?: formresumenesferiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formresumenesferis to fetch.
     */
    orderBy?: formresumenesferiOrderByWithRelationInput | formresumenesferiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formresumenesferis.
     */
    cursor?: formresumenesferiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formresumenesferis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formresumenesferis.
     */
    skip?: number
    distinct?: FormresumenesferiScalarFieldEnum | FormresumenesferiScalarFieldEnum[]
  }

  /**
   * formresumenesferi create
   */
  export type formresumenesferiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * The data needed to create a formresumenesferi.
     */
    data: XOR<formresumenesferiCreateInput, formresumenesferiUncheckedCreateInput>
  }

  /**
   * formresumenesferi createMany
   */
  export type formresumenesferiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formresumenesferis.
     */
    data: formresumenesferiCreateManyInput | formresumenesferiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formresumenesferi update
   */
  export type formresumenesferiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * The data needed to update a formresumenesferi.
     */
    data: XOR<formresumenesferiUpdateInput, formresumenesferiUncheckedUpdateInput>
    /**
     * Choose, which formresumenesferi to update.
     */
    where: formresumenesferiWhereUniqueInput
  }

  /**
   * formresumenesferi updateMany
   */
  export type formresumenesferiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formresumenesferis.
     */
    data: XOR<formresumenesferiUpdateManyMutationInput, formresumenesferiUncheckedUpdateManyInput>
    /**
     * Filter which formresumenesferis to update
     */
    where?: formresumenesferiWhereInput
    /**
     * Limit how many formresumenesferis to update.
     */
    limit?: number
  }

  /**
   * formresumenesferi upsert
   */
  export type formresumenesferiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * The filter to search for the formresumenesferi to update in case it exists.
     */
    where: formresumenesferiWhereUniqueInput
    /**
     * In case the formresumenesferi found by the `where` argument doesn't exist, create a new formresumenesferi with this data.
     */
    create: XOR<formresumenesferiCreateInput, formresumenesferiUncheckedCreateInput>
    /**
     * In case the formresumenesferi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formresumenesferiUpdateInput, formresumenesferiUncheckedUpdateInput>
  }

  /**
   * formresumenesferi delete
   */
  export type formresumenesferiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
    /**
     * Filter which formresumenesferi to delete.
     */
    where: formresumenesferiWhereUniqueInput
  }

  /**
   * formresumenesferi deleteMany
   */
  export type formresumenesferiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formresumenesferis to delete
     */
    where?: formresumenesferiWhereInput
    /**
     * Limit how many formresumenesferis to delete.
     */
    limit?: number
  }

  /**
   * formresumenesferi.report
   */
  export type formresumenesferi$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * formresumenesferi without action
   */
  export type formresumenesferiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formresumenesferi
     */
    select?: formresumenesferiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formresumenesferi
     */
    omit?: formresumenesferiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formresumenesferiInclude<ExtArgs> | null
  }


  /**
   * Model report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    repID: string | null
    stuID: string | null
    roomID: string | null
    carID: string | null
    detID: string | null
    esfID: string | null
    renID: string | null
    impID: string | null
    ingID: string | null
    actID: string | null
    resID: string | null
    r110ID: string | null
  }

  export type ReportMaxAggregateOutputType = {
    repID: string | null
    stuID: string | null
    roomID: string | null
    carID: string | null
    detID: string | null
    esfID: string | null
    renID: string | null
    impID: string | null
    ingID: string | null
    actID: string | null
    resID: string | null
    r110ID: string | null
  }

  export type ReportCountAggregateOutputType = {
    repID: number
    stuID: number
    roomID: number
    carID: number
    detID: number
    esfID: number
    renID: number
    impID: number
    ingID: number
    actID: number
    resID: number
    r110ID: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    repID?: true
    stuID?: true
    roomID?: true
    carID?: true
    detID?: true
    esfID?: true
    renID?: true
    impID?: true
    ingID?: true
    actID?: true
    resID?: true
    r110ID?: true
  }

  export type ReportMaxAggregateInputType = {
    repID?: true
    stuID?: true
    roomID?: true
    carID?: true
    detID?: true
    esfID?: true
    renID?: true
    impID?: true
    ingID?: true
    actID?: true
    resID?: true
    r110ID?: true
  }

  export type ReportCountAggregateInputType = {
    repID?: true
    stuID?: true
    roomID?: true
    carID?: true
    detID?: true
    esfID?: true
    renID?: true
    impID?: true
    ingID?: true
    actID?: true
    resID?: true
    r110ID?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report to aggregate.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
    orderBy?: reportOrderByWithAggregationInput | reportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    repID: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repID?: boolean
    stuID?: boolean
    roomID?: boolean
    carID?: boolean
    detID?: boolean
    esfID?: boolean
    renID?: boolean
    impID?: boolean
    ingID?: boolean
    actID?: boolean
    resID?: boolean
    r110ID?: boolean
    formactivosfijos?: boolean | formactivosfijosDefaultArgs<ExtArgs>
    formcaratula?: boolean | formcaratulaDefaultArgs<ExtArgs>
    formdetallerenglones?: boolean | formdetallerenglonesDefaultArgs<ExtArgs>
    formesfpatrimonio?: boolean | formesfpatrimonioDefaultArgs<ExtArgs>
    formimpuestodiferido?: boolean | formimpuestodiferidoDefaultArgs<ExtArgs>
    formingresosfancturacion?: boolean | formingresosfancturacionDefaultArgs<ExtArgs>
    formr110?: boolean | formr110DefaultArgs<ExtArgs>
    formrentaliquida?: boolean | formrentaliquidaDefaultArgs<ExtArgs>
    formresumenesferi?: boolean | formresumenesferiDefaultArgs<ExtArgs>
    room?: boolean | roomDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type reportSelectScalar = {
    repID?: boolean
    stuID?: boolean
    roomID?: boolean
    carID?: boolean
    detID?: boolean
    esfID?: boolean
    renID?: boolean
    impID?: boolean
    ingID?: boolean
    actID?: boolean
    resID?: boolean
    r110ID?: boolean
  }

  export type reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"repID" | "stuID" | "roomID" | "carID" | "detID" | "esfID" | "renID" | "impID" | "ingID" | "actID" | "resID" | "r110ID", ExtArgs["result"]["report"]>
  export type reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formactivosfijos?: boolean | formactivosfijosDefaultArgs<ExtArgs>
    formcaratula?: boolean | formcaratulaDefaultArgs<ExtArgs>
    formdetallerenglones?: boolean | formdetallerenglonesDefaultArgs<ExtArgs>
    formesfpatrimonio?: boolean | formesfpatrimonioDefaultArgs<ExtArgs>
    formimpuestodiferido?: boolean | formimpuestodiferidoDefaultArgs<ExtArgs>
    formingresosfancturacion?: boolean | formingresosfancturacionDefaultArgs<ExtArgs>
    formr110?: boolean | formr110DefaultArgs<ExtArgs>
    formrentaliquida?: boolean | formrentaliquidaDefaultArgs<ExtArgs>
    formresumenesferi?: boolean | formresumenesferiDefaultArgs<ExtArgs>
    room?: boolean | roomDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report"
    objects: {
      formactivosfijos: Prisma.$formactivosfijosPayload<ExtArgs>
      formcaratula: Prisma.$formcaratulaPayload<ExtArgs>
      formdetallerenglones: Prisma.$formdetallerenglonesPayload<ExtArgs>
      formesfpatrimonio: Prisma.$formesfpatrimonioPayload<ExtArgs>
      formimpuestodiferido: Prisma.$formimpuestodiferidoPayload<ExtArgs>
      formingresosfancturacion: Prisma.$formingresosfancturacionPayload<ExtArgs>
      formr110: Prisma.$formr110Payload<ExtArgs>
      formrentaliquida: Prisma.$formrentaliquidaPayload<ExtArgs>
      formresumenesferi: Prisma.$formresumenesferiPayload<ExtArgs>
      room: Prisma.$roomPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      repID: string
      stuID: string
      roomID: string
      carID: string
      detID: string
      esfID: string
      renID: string
      impID: string
      ingID: string
      actID: string
      resID: string
      r110ID: string
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type reportGetPayload<S extends boolean | null | undefined | reportDefaultArgs> = $Result.GetResult<Prisma.$reportPayload, S>

  type reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report'], meta: { name: 'report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {reportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportFindUniqueArgs>(args: SelectSubset<T, reportFindUniqueArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportFindUniqueOrThrowArgs>(args: SelectSubset<T, reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportFindFirstArgs>(args?: SelectSubset<T, reportFindFirstArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportFindFirstOrThrowArgs>(args?: SelectSubset<T, reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `repID`
     * const reportWithRepIDOnly = await prisma.report.findMany({ select: { repID: true } })
     * 
     */
    findMany<T extends reportFindManyArgs>(args?: SelectSubset<T, reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {reportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends reportCreateArgs>(args: SelectSubset<T, reportCreateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportCreateManyArgs>(args?: SelectSubset<T, reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {reportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends reportDeleteArgs>(args: SelectSubset<T, reportDeleteArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {reportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportUpdateArgs>(args: SelectSubset<T, reportUpdateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportDeleteManyArgs>(args?: SelectSubset<T, reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportUpdateManyArgs>(args: SelectSubset<T, reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {reportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends reportUpsertArgs>(args: SelectSubset<T, reportUpsertArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportCountArgs>(
      args?: Subset<T, reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportGroupByArgs['orderBy'] }
        : { orderBy?: reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report model
   */
  readonly fields: reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formactivosfijos<T extends formactivosfijosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formactivosfijosDefaultArgs<ExtArgs>>): Prisma__formactivosfijosClient<$Result.GetResult<Prisma.$formactivosfijosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formcaratula<T extends formcaratulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formcaratulaDefaultArgs<ExtArgs>>): Prisma__formcaratulaClient<$Result.GetResult<Prisma.$formcaratulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formdetallerenglones<T extends formdetallerenglonesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formdetallerenglonesDefaultArgs<ExtArgs>>): Prisma__formdetallerenglonesClient<$Result.GetResult<Prisma.$formdetallerenglonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formesfpatrimonio<T extends formesfpatrimonioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formesfpatrimonioDefaultArgs<ExtArgs>>): Prisma__formesfpatrimonioClient<$Result.GetResult<Prisma.$formesfpatrimonioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formimpuestodiferido<T extends formimpuestodiferidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formimpuestodiferidoDefaultArgs<ExtArgs>>): Prisma__formimpuestodiferidoClient<$Result.GetResult<Prisma.$formimpuestodiferidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formingresosfancturacion<T extends formingresosfancturacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formingresosfancturacionDefaultArgs<ExtArgs>>): Prisma__formingresosfancturacionClient<$Result.GetResult<Prisma.$formingresosfancturacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formr110<T extends formr110DefaultArgs<ExtArgs> = {}>(args?: Subset<T, formr110DefaultArgs<ExtArgs>>): Prisma__formr110Client<$Result.GetResult<Prisma.$formr110Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formrentaliquida<T extends formrentaliquidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formrentaliquidaDefaultArgs<ExtArgs>>): Prisma__formrentaliquidaClient<$Result.GetResult<Prisma.$formrentaliquidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formresumenesferi<T extends formresumenesferiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formresumenesferiDefaultArgs<ExtArgs>>): Prisma__formresumenesferiClient<$Result.GetResult<Prisma.$formresumenesferiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomDefaultArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the report model
   */
  interface reportFieldRefs {
    readonly repID: FieldRef<"report", 'String'>
    readonly stuID: FieldRef<"report", 'String'>
    readonly roomID: FieldRef<"report", 'String'>
    readonly carID: FieldRef<"report", 'String'>
    readonly detID: FieldRef<"report", 'String'>
    readonly esfID: FieldRef<"report", 'String'>
    readonly renID: FieldRef<"report", 'String'>
    readonly impID: FieldRef<"report", 'String'>
    readonly ingID: FieldRef<"report", 'String'>
    readonly actID: FieldRef<"report", 'String'>
    readonly resID: FieldRef<"report", 'String'>
    readonly r110ID: FieldRef<"report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * report findUnique
   */
  export type reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findUniqueOrThrow
   */
  export type reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findFirst
   */
  export type reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findFirstOrThrow
   */
  export type reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findMany
   */
  export type reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report create
   */
  export type reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to create a report.
     */
    data: XOR<reportCreateInput, reportUncheckedCreateInput>
  }

  /**
   * report createMany
   */
  export type reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report update
   */
  export type reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to update a report.
     */
    data: XOR<reportUpdateInput, reportUncheckedUpdateInput>
    /**
     * Choose, which report to update.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report updateMany
   */
  export type reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * report upsert
   */
  export type reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The filter to search for the report to update in case it exists.
     */
    where: reportWhereUniqueInput
    /**
     * In case the report found by the `where` argument doesn't exist, create a new report with this data.
     */
    create: XOR<reportCreateInput, reportUncheckedCreateInput>
    /**
     * In case the report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportUpdateInput, reportUncheckedUpdateInput>
  }

  /**
   * report delete
   */
  export type reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter which report to delete.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report deleteMany
   */
  export type reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * report without action
   */
  export type reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
  }


  /**
   * Model room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    roomID: string | null
    roomName: string | null
    roomPassword: string | null
    roomDate: Date | null
    roomStatus: $Enums.room_roomStatus | null
    usuID: string | null
  }

  export type RoomMaxAggregateOutputType = {
    roomID: string | null
    roomName: string | null
    roomPassword: string | null
    roomDate: Date | null
    roomStatus: $Enums.room_roomStatus | null
    usuID: string | null
  }

  export type RoomCountAggregateOutputType = {
    roomID: number
    roomName: number
    roomPassword: number
    roomDate: number
    roomStatus: number
    roomAnswer: number
    usuID: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    roomID?: true
    roomName?: true
    roomPassword?: true
    roomDate?: true
    roomStatus?: true
    usuID?: true
  }

  export type RoomMaxAggregateInputType = {
    roomID?: true
    roomName?: true
    roomPassword?: true
    roomDate?: true
    roomStatus?: true
    usuID?: true
  }

  export type RoomCountAggregateInputType = {
    roomID?: true
    roomName?: true
    roomPassword?: true
    roomDate?: true
    roomStatus?: true
    roomAnswer?: true
    usuID?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room to aggregate.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
    orderBy?: roomOrderByWithAggregationInput | roomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    roomID: string
    roomName: string
    roomPassword: string
    roomDate: Date
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonValue
    usuID: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomID?: boolean
    roomName?: boolean
    roomPassword?: boolean
    roomDate?: boolean
    roomStatus?: boolean
    roomAnswer?: boolean
    usuID?: boolean
    report?: boolean | room$reportArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    student?: boolean | room$studentArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type roomSelectScalar = {
    roomID?: boolean
    roomName?: boolean
    roomPassword?: boolean
    roomDate?: boolean
    roomStatus?: boolean
    roomAnswer?: boolean
    usuID?: boolean
  }

  export type roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roomID" | "roomName" | "roomPassword" | "roomDate" | "roomStatus" | "roomAnswer" | "usuID", ExtArgs["result"]["room"]>
  export type roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | room$reportArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    student?: boolean | room$studentArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roomID: string
      roomName: string
      roomPassword: string
      roomDate: Date
      roomStatus: $Enums.room_roomStatus
      roomAnswer: Prisma.JsonValue
      usuID: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type roomGetPayload<S extends boolean | null | undefined | roomDefaultArgs> = $Result.GetResult<Prisma.$roomPayload, S>

  type roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room'], meta: { name: 'room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {roomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomFindUniqueArgs>(args: SelectSubset<T, roomFindUniqueArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(args: SelectSubset<T, roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomFindFirstArgs>(args?: SelectSubset<T, roomFindFirstArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(args?: SelectSubset<T, roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `roomID`
     * const roomWithRoomIDOnly = await prisma.room.findMany({ select: { roomID: true } })
     * 
     */
    findMany<T extends roomFindManyArgs>(args?: SelectSubset<T, roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {roomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends roomCreateArgs>(args: SelectSubset<T, roomCreateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomCreateManyArgs>(args?: SelectSubset<T, roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {roomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends roomDeleteArgs>(args: SelectSubset<T, roomDeleteArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {roomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomUpdateArgs>(args: SelectSubset<T, roomUpdateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomDeleteManyArgs>(args?: SelectSubset<T, roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomUpdateManyArgs>(args: SelectSubset<T, roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {roomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends roomUpsertArgs>(args: SelectSubset<T, roomUpsertArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomCountArgs>(
      args?: Subset<T, roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomGroupByArgs['orderBy'] }
        : { orderBy?: roomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room model
   */
  readonly fields: roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends room$reportArgs<ExtArgs> = {}>(args?: Subset<T, room$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends room$studentArgs<ExtArgs> = {}>(args?: Subset<T, room$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room model
   */
  interface roomFieldRefs {
    readonly roomID: FieldRef<"room", 'String'>
    readonly roomName: FieldRef<"room", 'String'>
    readonly roomPassword: FieldRef<"room", 'String'>
    readonly roomDate: FieldRef<"room", 'DateTime'>
    readonly roomStatus: FieldRef<"room", 'room_roomStatus'>
    readonly roomAnswer: FieldRef<"room", 'Json'>
    readonly usuID: FieldRef<"room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * room findUnique
   */
  export type roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findUniqueOrThrow
   */
  export type roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findFirst
   */
  export type roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findFirstOrThrow
   */
  export type roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findMany
   */
  export type roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room create
   */
  export type roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to create a room.
     */
    data: XOR<roomCreateInput, roomUncheckedCreateInput>
  }

  /**
   * room createMany
   */
  export type roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room update
   */
  export type roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to update a room.
     */
    data: XOR<roomUpdateInput, roomUncheckedUpdateInput>
    /**
     * Choose, which room to update.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room updateMany
   */
  export type roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * room upsert
   */
  export type roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The filter to search for the room to update in case it exists.
     */
    where: roomWhereUniqueInput
    /**
     * In case the room found by the `where` argument doesn't exist, create a new room with this data.
     */
    create: XOR<roomCreateInput, roomUncheckedCreateInput>
    /**
     * In case the room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomUpdateInput, roomUncheckedUpdateInput>
  }

  /**
   * room delete
   */
  export type roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter which room to delete.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room deleteMany
   */
  export type roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * room.report
   */
  export type room$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * room.student
   */
  export type room$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * room without action
   */
  export type roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    stuID: string | null
    stuCedula: string | null
    roomID: string | null
  }

  export type StudentMaxAggregateOutputType = {
    stuID: string | null
    stuCedula: string | null
    roomID: string | null
  }

  export type StudentCountAggregateOutputType = {
    stuID: number
    stuCedula: number
    roomID: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    stuID?: true
    stuCedula?: true
    roomID?: true
  }

  export type StudentMaxAggregateInputType = {
    stuID?: true
    stuCedula?: true
    roomID?: true
  }

  export type StudentCountAggregateInputType = {
    stuID?: true
    stuCedula?: true
    roomID?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    stuID: string
    stuCedula: string
    roomID: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stuID?: boolean
    stuCedula?: boolean
    roomID?: boolean
    report?: boolean | student$reportArgs<ExtArgs>
    room?: boolean | roomDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type studentSelectScalar = {
    stuID?: boolean
    stuCedula?: boolean
    roomID?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stuID" | "stuCedula" | "roomID", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | student$reportArgs<ExtArgs>
    room?: boolean | roomDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
      room: Prisma.$roomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      stuID: string
      stuCedula: string
      roomID: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `stuID`
     * const studentWithStuIDOnly = await prisma.student.findMany({ select: { stuID: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends student$reportArgs<ExtArgs> = {}>(args?: Subset<T, student$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room<T extends roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomDefaultArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly stuID: FieldRef<"student", 'String'>
    readonly stuCedula: FieldRef<"student", 'String'>
    readonly roomID: FieldRef<"student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.report
   */
  export type student$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    usuID: string | null
    usuName: string | null
    usuEmail: string | null
    usuPassword: string | null
    usuRole: $Enums.user_usuRole | null
  }

  export type UserMaxAggregateOutputType = {
    usuID: string | null
    usuName: string | null
    usuEmail: string | null
    usuPassword: string | null
    usuRole: $Enums.user_usuRole | null
  }

  export type UserCountAggregateOutputType = {
    usuID: number
    usuName: number
    usuEmail: number
    usuPassword: number
    usuRole: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    usuID?: true
    usuName?: true
    usuEmail?: true
    usuPassword?: true
    usuRole?: true
  }

  export type UserMaxAggregateInputType = {
    usuID?: true
    usuName?: true
    usuEmail?: true
    usuPassword?: true
    usuRole?: true
  }

  export type UserCountAggregateInputType = {
    usuID?: true
    usuName?: true
    usuEmail?: true
    usuPassword?: true
    usuRole?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    usuID: string
    usuName: string
    usuEmail: string
    usuPassword: string
    usuRole: $Enums.user_usuRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuID?: boolean
    usuName?: boolean
    usuEmail?: boolean
    usuPassword?: boolean
    usuRole?: boolean
    room?: boolean | user$roomArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    usuID?: boolean
    usuName?: boolean
    usuEmail?: boolean
    usuPassword?: boolean
    usuRole?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuID" | "usuName" | "usuEmail" | "usuPassword" | "usuRole", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | user$roomArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      room: Prisma.$roomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuID: string
      usuName: string
      usuEmail: string
      usuPassword: string
      usuRole: $Enums.user_usuRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `usuID`
     * const userWithUsuIDOnly = await prisma.user.findMany({ select: { usuID: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends user$roomArgs<ExtArgs> = {}>(args?: Subset<T, user$roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly usuID: FieldRef<"user", 'String'>
    readonly usuName: FieldRef<"user", 'String'>
    readonly usuEmail: FieldRef<"user", 'String'>
    readonly usuPassword: FieldRef<"user", 'String'>
    readonly usuRole: FieldRef<"user", 'user_usuRole'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.room
   */
  export type user$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    where?: roomWhereInput
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    cursor?: roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FormactivosfijosScalarFieldEnum: {
    actID: 'actID',
    actContent: 'actContent'
  };

  export type FormactivosfijosScalarFieldEnum = (typeof FormactivosfijosScalarFieldEnum)[keyof typeof FormactivosfijosScalarFieldEnum]


  export const FormcaratulaScalarFieldEnum: {
    carID: 'carID',
    carContent: 'carContent'
  };

  export type FormcaratulaScalarFieldEnum = (typeof FormcaratulaScalarFieldEnum)[keyof typeof FormcaratulaScalarFieldEnum]


  export const FormdetallerenglonesScalarFieldEnum: {
    detID: 'detID',
    detContent: 'detContent'
  };

  export type FormdetallerenglonesScalarFieldEnum = (typeof FormdetallerenglonesScalarFieldEnum)[keyof typeof FormdetallerenglonesScalarFieldEnum]


  export const FormesfpatrimonioScalarFieldEnum: {
    esfID: 'esfID',
    esfContent: 'esfContent'
  };

  export type FormesfpatrimonioScalarFieldEnum = (typeof FormesfpatrimonioScalarFieldEnum)[keyof typeof FormesfpatrimonioScalarFieldEnum]


  export const FormimpuestodiferidoScalarFieldEnum: {
    impID: 'impID',
    impContent: 'impContent'
  };

  export type FormimpuestodiferidoScalarFieldEnum = (typeof FormimpuestodiferidoScalarFieldEnum)[keyof typeof FormimpuestodiferidoScalarFieldEnum]


  export const FormingresosfancturacionScalarFieldEnum: {
    ingID: 'ingID',
    ingContent: 'ingContent'
  };

  export type FormingresosfancturacionScalarFieldEnum = (typeof FormingresosfancturacionScalarFieldEnum)[keyof typeof FormingresosfancturacionScalarFieldEnum]


  export const Formr110ScalarFieldEnum: {
    r110ID: 'r110ID',
    r110Content: 'r110Content'
  };

  export type Formr110ScalarFieldEnum = (typeof Formr110ScalarFieldEnum)[keyof typeof Formr110ScalarFieldEnum]


  export const FormrentaliquidaScalarFieldEnum: {
    renID: 'renID',
    renContent: 'renContent'
  };

  export type FormrentaliquidaScalarFieldEnum = (typeof FormrentaliquidaScalarFieldEnum)[keyof typeof FormrentaliquidaScalarFieldEnum]


  export const FormresumenesferiScalarFieldEnum: {
    resID: 'resID',
    resContent: 'resContent'
  };

  export type FormresumenesferiScalarFieldEnum = (typeof FormresumenesferiScalarFieldEnum)[keyof typeof FormresumenesferiScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    repID: 'repID',
    stuID: 'stuID',
    roomID: 'roomID',
    carID: 'carID',
    detID: 'detID',
    esfID: 'esfID',
    renID: 'renID',
    impID: 'impID',
    ingID: 'ingID',
    actID: 'actID',
    resID: 'resID',
    r110ID: 'r110ID'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    roomID: 'roomID',
    roomName: 'roomName',
    roomPassword: 'roomPassword',
    roomDate: 'roomDate',
    roomStatus: 'roomStatus',
    roomAnswer: 'roomAnswer',
    usuID: 'usuID'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    stuID: 'stuID',
    stuCedula: 'stuCedula',
    roomID: 'roomID'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    usuID: 'usuID',
    usuName: 'usuName',
    usuEmail: 'usuEmail',
    usuPassword: 'usuPassword',
    usuRole: 'usuRole'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const formactivosfijosOrderByRelevanceFieldEnum: {
    actID: 'actID'
  };

  export type formactivosfijosOrderByRelevanceFieldEnum = (typeof formactivosfijosOrderByRelevanceFieldEnum)[keyof typeof formactivosfijosOrderByRelevanceFieldEnum]


  export const formcaratulaOrderByRelevanceFieldEnum: {
    carID: 'carID'
  };

  export type formcaratulaOrderByRelevanceFieldEnum = (typeof formcaratulaOrderByRelevanceFieldEnum)[keyof typeof formcaratulaOrderByRelevanceFieldEnum]


  export const formdetallerenglonesOrderByRelevanceFieldEnum: {
    detID: 'detID'
  };

  export type formdetallerenglonesOrderByRelevanceFieldEnum = (typeof formdetallerenglonesOrderByRelevanceFieldEnum)[keyof typeof formdetallerenglonesOrderByRelevanceFieldEnum]


  export const formesfpatrimonioOrderByRelevanceFieldEnum: {
    esfID: 'esfID'
  };

  export type formesfpatrimonioOrderByRelevanceFieldEnum = (typeof formesfpatrimonioOrderByRelevanceFieldEnum)[keyof typeof formesfpatrimonioOrderByRelevanceFieldEnum]


  export const formimpuestodiferidoOrderByRelevanceFieldEnum: {
    impID: 'impID'
  };

  export type formimpuestodiferidoOrderByRelevanceFieldEnum = (typeof formimpuestodiferidoOrderByRelevanceFieldEnum)[keyof typeof formimpuestodiferidoOrderByRelevanceFieldEnum]


  export const formingresosfancturacionOrderByRelevanceFieldEnum: {
    ingID: 'ingID'
  };

  export type formingresosfancturacionOrderByRelevanceFieldEnum = (typeof formingresosfancturacionOrderByRelevanceFieldEnum)[keyof typeof formingresosfancturacionOrderByRelevanceFieldEnum]


  export const formr110OrderByRelevanceFieldEnum: {
    r110ID: 'r110ID'
  };

  export type formr110OrderByRelevanceFieldEnum = (typeof formr110OrderByRelevanceFieldEnum)[keyof typeof formr110OrderByRelevanceFieldEnum]


  export const formrentaliquidaOrderByRelevanceFieldEnum: {
    renID: 'renID'
  };

  export type formrentaliquidaOrderByRelevanceFieldEnum = (typeof formrentaliquidaOrderByRelevanceFieldEnum)[keyof typeof formrentaliquidaOrderByRelevanceFieldEnum]


  export const formresumenesferiOrderByRelevanceFieldEnum: {
    resID: 'resID'
  };

  export type formresumenesferiOrderByRelevanceFieldEnum = (typeof formresumenesferiOrderByRelevanceFieldEnum)[keyof typeof formresumenesferiOrderByRelevanceFieldEnum]


  export const reportOrderByRelevanceFieldEnum: {
    repID: 'repID',
    stuID: 'stuID',
    roomID: 'roomID',
    carID: 'carID',
    detID: 'detID',
    esfID: 'esfID',
    renID: 'renID',
    impID: 'impID',
    ingID: 'ingID',
    actID: 'actID',
    resID: 'resID',
    r110ID: 'r110ID'
  };

  export type reportOrderByRelevanceFieldEnum = (typeof reportOrderByRelevanceFieldEnum)[keyof typeof reportOrderByRelevanceFieldEnum]


  export const roomOrderByRelevanceFieldEnum: {
    roomID: 'roomID',
    roomName: 'roomName',
    roomPassword: 'roomPassword',
    usuID: 'usuID'
  };

  export type roomOrderByRelevanceFieldEnum = (typeof roomOrderByRelevanceFieldEnum)[keyof typeof roomOrderByRelevanceFieldEnum]


  export const studentOrderByRelevanceFieldEnum: {
    stuID: 'stuID',
    stuCedula: 'stuCedula',
    roomID: 'roomID'
  };

  export type studentOrderByRelevanceFieldEnum = (typeof studentOrderByRelevanceFieldEnum)[keyof typeof studentOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    usuID: 'usuID',
    usuName: 'usuName',
    usuEmail: 'usuEmail',
    usuPassword: 'usuPassword'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'room_roomStatus'
   */
  export type Enumroom_roomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_roomStatus'>
    


  /**
   * Reference to a field of type 'user_usuRole'
   */
  export type Enumuser_usuRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_usuRole'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type formactivosfijosWhereInput = {
    AND?: formactivosfijosWhereInput | formactivosfijosWhereInput[]
    OR?: formactivosfijosWhereInput[]
    NOT?: formactivosfijosWhereInput | formactivosfijosWhereInput[]
    actID?: StringFilter<"formactivosfijos"> | string
    actContent?: JsonFilter<"formactivosfijos">
    report?: ReportListRelationFilter
  }

  export type formactivosfijosOrderByWithRelationInput = {
    actID?: SortOrder
    actContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formactivosfijosOrderByRelevanceInput
  }

  export type formactivosfijosWhereUniqueInput = Prisma.AtLeast<{
    actID?: string
    AND?: formactivosfijosWhereInput | formactivosfijosWhereInput[]
    OR?: formactivosfijosWhereInput[]
    NOT?: formactivosfijosWhereInput | formactivosfijosWhereInput[]
    actContent?: JsonFilter<"formactivosfijos">
    report?: ReportListRelationFilter
  }, "actID">

  export type formactivosfijosOrderByWithAggregationInput = {
    actID?: SortOrder
    actContent?: SortOrder
    _count?: formactivosfijosCountOrderByAggregateInput
    _max?: formactivosfijosMaxOrderByAggregateInput
    _min?: formactivosfijosMinOrderByAggregateInput
  }

  export type formactivosfijosScalarWhereWithAggregatesInput = {
    AND?: formactivosfijosScalarWhereWithAggregatesInput | formactivosfijosScalarWhereWithAggregatesInput[]
    OR?: formactivosfijosScalarWhereWithAggregatesInput[]
    NOT?: formactivosfijosScalarWhereWithAggregatesInput | formactivosfijosScalarWhereWithAggregatesInput[]
    actID?: StringWithAggregatesFilter<"formactivosfijos"> | string
    actContent?: JsonWithAggregatesFilter<"formactivosfijos">
  }

  export type formcaratulaWhereInput = {
    AND?: formcaratulaWhereInput | formcaratulaWhereInput[]
    OR?: formcaratulaWhereInput[]
    NOT?: formcaratulaWhereInput | formcaratulaWhereInput[]
    carID?: StringFilter<"formcaratula"> | string
    carContent?: JsonFilter<"formcaratula">
    report?: ReportListRelationFilter
  }

  export type formcaratulaOrderByWithRelationInput = {
    carID?: SortOrder
    carContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formcaratulaOrderByRelevanceInput
  }

  export type formcaratulaWhereUniqueInput = Prisma.AtLeast<{
    carID?: string
    AND?: formcaratulaWhereInput | formcaratulaWhereInput[]
    OR?: formcaratulaWhereInput[]
    NOT?: formcaratulaWhereInput | formcaratulaWhereInput[]
    carContent?: JsonFilter<"formcaratula">
    report?: ReportListRelationFilter
  }, "carID">

  export type formcaratulaOrderByWithAggregationInput = {
    carID?: SortOrder
    carContent?: SortOrder
    _count?: formcaratulaCountOrderByAggregateInput
    _max?: formcaratulaMaxOrderByAggregateInput
    _min?: formcaratulaMinOrderByAggregateInput
  }

  export type formcaratulaScalarWhereWithAggregatesInput = {
    AND?: formcaratulaScalarWhereWithAggregatesInput | formcaratulaScalarWhereWithAggregatesInput[]
    OR?: formcaratulaScalarWhereWithAggregatesInput[]
    NOT?: formcaratulaScalarWhereWithAggregatesInput | formcaratulaScalarWhereWithAggregatesInput[]
    carID?: StringWithAggregatesFilter<"formcaratula"> | string
    carContent?: JsonWithAggregatesFilter<"formcaratula">
  }

  export type formdetallerenglonesWhereInput = {
    AND?: formdetallerenglonesWhereInput | formdetallerenglonesWhereInput[]
    OR?: formdetallerenglonesWhereInput[]
    NOT?: formdetallerenglonesWhereInput | formdetallerenglonesWhereInput[]
    detID?: StringFilter<"formdetallerenglones"> | string
    detContent?: JsonFilter<"formdetallerenglones">
    report?: ReportListRelationFilter
  }

  export type formdetallerenglonesOrderByWithRelationInput = {
    detID?: SortOrder
    detContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formdetallerenglonesOrderByRelevanceInput
  }

  export type formdetallerenglonesWhereUniqueInput = Prisma.AtLeast<{
    detID?: string
    AND?: formdetallerenglonesWhereInput | formdetallerenglonesWhereInput[]
    OR?: formdetallerenglonesWhereInput[]
    NOT?: formdetallerenglonesWhereInput | formdetallerenglonesWhereInput[]
    detContent?: JsonFilter<"formdetallerenglones">
    report?: ReportListRelationFilter
  }, "detID">

  export type formdetallerenglonesOrderByWithAggregationInput = {
    detID?: SortOrder
    detContent?: SortOrder
    _count?: formdetallerenglonesCountOrderByAggregateInput
    _max?: formdetallerenglonesMaxOrderByAggregateInput
    _min?: formdetallerenglonesMinOrderByAggregateInput
  }

  export type formdetallerenglonesScalarWhereWithAggregatesInput = {
    AND?: formdetallerenglonesScalarWhereWithAggregatesInput | formdetallerenglonesScalarWhereWithAggregatesInput[]
    OR?: formdetallerenglonesScalarWhereWithAggregatesInput[]
    NOT?: formdetallerenglonesScalarWhereWithAggregatesInput | formdetallerenglonesScalarWhereWithAggregatesInput[]
    detID?: StringWithAggregatesFilter<"formdetallerenglones"> | string
    detContent?: JsonWithAggregatesFilter<"formdetallerenglones">
  }

  export type formesfpatrimonioWhereInput = {
    AND?: formesfpatrimonioWhereInput | formesfpatrimonioWhereInput[]
    OR?: formesfpatrimonioWhereInput[]
    NOT?: formesfpatrimonioWhereInput | formesfpatrimonioWhereInput[]
    esfID?: StringFilter<"formesfpatrimonio"> | string
    esfContent?: JsonFilter<"formesfpatrimonio">
    report?: ReportListRelationFilter
  }

  export type formesfpatrimonioOrderByWithRelationInput = {
    esfID?: SortOrder
    esfContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formesfpatrimonioOrderByRelevanceInput
  }

  export type formesfpatrimonioWhereUniqueInput = Prisma.AtLeast<{
    esfID?: string
    AND?: formesfpatrimonioWhereInput | formesfpatrimonioWhereInput[]
    OR?: formesfpatrimonioWhereInput[]
    NOT?: formesfpatrimonioWhereInput | formesfpatrimonioWhereInput[]
    esfContent?: JsonFilter<"formesfpatrimonio">
    report?: ReportListRelationFilter
  }, "esfID">

  export type formesfpatrimonioOrderByWithAggregationInput = {
    esfID?: SortOrder
    esfContent?: SortOrder
    _count?: formesfpatrimonioCountOrderByAggregateInput
    _max?: formesfpatrimonioMaxOrderByAggregateInput
    _min?: formesfpatrimonioMinOrderByAggregateInput
  }

  export type formesfpatrimonioScalarWhereWithAggregatesInput = {
    AND?: formesfpatrimonioScalarWhereWithAggregatesInput | formesfpatrimonioScalarWhereWithAggregatesInput[]
    OR?: formesfpatrimonioScalarWhereWithAggregatesInput[]
    NOT?: formesfpatrimonioScalarWhereWithAggregatesInput | formesfpatrimonioScalarWhereWithAggregatesInput[]
    esfID?: StringWithAggregatesFilter<"formesfpatrimonio"> | string
    esfContent?: JsonWithAggregatesFilter<"formesfpatrimonio">
  }

  export type formimpuestodiferidoWhereInput = {
    AND?: formimpuestodiferidoWhereInput | formimpuestodiferidoWhereInput[]
    OR?: formimpuestodiferidoWhereInput[]
    NOT?: formimpuestodiferidoWhereInput | formimpuestodiferidoWhereInput[]
    impID?: StringFilter<"formimpuestodiferido"> | string
    impContent?: JsonFilter<"formimpuestodiferido">
    report?: ReportListRelationFilter
  }

  export type formimpuestodiferidoOrderByWithRelationInput = {
    impID?: SortOrder
    impContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formimpuestodiferidoOrderByRelevanceInput
  }

  export type formimpuestodiferidoWhereUniqueInput = Prisma.AtLeast<{
    impID?: string
    AND?: formimpuestodiferidoWhereInput | formimpuestodiferidoWhereInput[]
    OR?: formimpuestodiferidoWhereInput[]
    NOT?: formimpuestodiferidoWhereInput | formimpuestodiferidoWhereInput[]
    impContent?: JsonFilter<"formimpuestodiferido">
    report?: ReportListRelationFilter
  }, "impID">

  export type formimpuestodiferidoOrderByWithAggregationInput = {
    impID?: SortOrder
    impContent?: SortOrder
    _count?: formimpuestodiferidoCountOrderByAggregateInput
    _max?: formimpuestodiferidoMaxOrderByAggregateInput
    _min?: formimpuestodiferidoMinOrderByAggregateInput
  }

  export type formimpuestodiferidoScalarWhereWithAggregatesInput = {
    AND?: formimpuestodiferidoScalarWhereWithAggregatesInput | formimpuestodiferidoScalarWhereWithAggregatesInput[]
    OR?: formimpuestodiferidoScalarWhereWithAggregatesInput[]
    NOT?: formimpuestodiferidoScalarWhereWithAggregatesInput | formimpuestodiferidoScalarWhereWithAggregatesInput[]
    impID?: StringWithAggregatesFilter<"formimpuestodiferido"> | string
    impContent?: JsonWithAggregatesFilter<"formimpuestodiferido">
  }

  export type formingresosfancturacionWhereInput = {
    AND?: formingresosfancturacionWhereInput | formingresosfancturacionWhereInput[]
    OR?: formingresosfancturacionWhereInput[]
    NOT?: formingresosfancturacionWhereInput | formingresosfancturacionWhereInput[]
    ingID?: StringFilter<"formingresosfancturacion"> | string
    ingContent?: JsonFilter<"formingresosfancturacion">
    report?: ReportListRelationFilter
  }

  export type formingresosfancturacionOrderByWithRelationInput = {
    ingID?: SortOrder
    ingContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formingresosfancturacionOrderByRelevanceInput
  }

  export type formingresosfancturacionWhereUniqueInput = Prisma.AtLeast<{
    ingID?: string
    AND?: formingresosfancturacionWhereInput | formingresosfancturacionWhereInput[]
    OR?: formingresosfancturacionWhereInput[]
    NOT?: formingresosfancturacionWhereInput | formingresosfancturacionWhereInput[]
    ingContent?: JsonFilter<"formingresosfancturacion">
    report?: ReportListRelationFilter
  }, "ingID">

  export type formingresosfancturacionOrderByWithAggregationInput = {
    ingID?: SortOrder
    ingContent?: SortOrder
    _count?: formingresosfancturacionCountOrderByAggregateInput
    _max?: formingresosfancturacionMaxOrderByAggregateInput
    _min?: formingresosfancturacionMinOrderByAggregateInput
  }

  export type formingresosfancturacionScalarWhereWithAggregatesInput = {
    AND?: formingresosfancturacionScalarWhereWithAggregatesInput | formingresosfancturacionScalarWhereWithAggregatesInput[]
    OR?: formingresosfancturacionScalarWhereWithAggregatesInput[]
    NOT?: formingresosfancturacionScalarWhereWithAggregatesInput | formingresosfancturacionScalarWhereWithAggregatesInput[]
    ingID?: StringWithAggregatesFilter<"formingresosfancturacion"> | string
    ingContent?: JsonWithAggregatesFilter<"formingresosfancturacion">
  }

  export type formr110WhereInput = {
    AND?: formr110WhereInput | formr110WhereInput[]
    OR?: formr110WhereInput[]
    NOT?: formr110WhereInput | formr110WhereInput[]
    r110ID?: StringFilter<"formr110"> | string
    r110Content?: JsonFilter<"formr110">
    report?: ReportListRelationFilter
  }

  export type formr110OrderByWithRelationInput = {
    r110ID?: SortOrder
    r110Content?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formr110OrderByRelevanceInput
  }

  export type formr110WhereUniqueInput = Prisma.AtLeast<{
    r110ID?: string
    AND?: formr110WhereInput | formr110WhereInput[]
    OR?: formr110WhereInput[]
    NOT?: formr110WhereInput | formr110WhereInput[]
    r110Content?: JsonFilter<"formr110">
    report?: ReportListRelationFilter
  }, "r110ID">

  export type formr110OrderByWithAggregationInput = {
    r110ID?: SortOrder
    r110Content?: SortOrder
    _count?: formr110CountOrderByAggregateInput
    _max?: formr110MaxOrderByAggregateInput
    _min?: formr110MinOrderByAggregateInput
  }

  export type formr110ScalarWhereWithAggregatesInput = {
    AND?: formr110ScalarWhereWithAggregatesInput | formr110ScalarWhereWithAggregatesInput[]
    OR?: formr110ScalarWhereWithAggregatesInput[]
    NOT?: formr110ScalarWhereWithAggregatesInput | formr110ScalarWhereWithAggregatesInput[]
    r110ID?: StringWithAggregatesFilter<"formr110"> | string
    r110Content?: JsonWithAggregatesFilter<"formr110">
  }

  export type formrentaliquidaWhereInput = {
    AND?: formrentaliquidaWhereInput | formrentaliquidaWhereInput[]
    OR?: formrentaliquidaWhereInput[]
    NOT?: formrentaliquidaWhereInput | formrentaliquidaWhereInput[]
    renID?: StringFilter<"formrentaliquida"> | string
    renContent?: JsonFilter<"formrentaliquida">
    report?: ReportListRelationFilter
  }

  export type formrentaliquidaOrderByWithRelationInput = {
    renID?: SortOrder
    renContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formrentaliquidaOrderByRelevanceInput
  }

  export type formrentaliquidaWhereUniqueInput = Prisma.AtLeast<{
    renID?: string
    AND?: formrentaliquidaWhereInput | formrentaliquidaWhereInput[]
    OR?: formrentaliquidaWhereInput[]
    NOT?: formrentaliquidaWhereInput | formrentaliquidaWhereInput[]
    renContent?: JsonFilter<"formrentaliquida">
    report?: ReportListRelationFilter
  }, "renID">

  export type formrentaliquidaOrderByWithAggregationInput = {
    renID?: SortOrder
    renContent?: SortOrder
    _count?: formrentaliquidaCountOrderByAggregateInput
    _max?: formrentaliquidaMaxOrderByAggregateInput
    _min?: formrentaliquidaMinOrderByAggregateInput
  }

  export type formrentaliquidaScalarWhereWithAggregatesInput = {
    AND?: formrentaliquidaScalarWhereWithAggregatesInput | formrentaliquidaScalarWhereWithAggregatesInput[]
    OR?: formrentaliquidaScalarWhereWithAggregatesInput[]
    NOT?: formrentaliquidaScalarWhereWithAggregatesInput | formrentaliquidaScalarWhereWithAggregatesInput[]
    renID?: StringWithAggregatesFilter<"formrentaliquida"> | string
    renContent?: JsonWithAggregatesFilter<"formrentaliquida">
  }

  export type formresumenesferiWhereInput = {
    AND?: formresumenesferiWhereInput | formresumenesferiWhereInput[]
    OR?: formresumenesferiWhereInput[]
    NOT?: formresumenesferiWhereInput | formresumenesferiWhereInput[]
    resID?: StringFilter<"formresumenesferi"> | string
    resContent?: JsonFilter<"formresumenesferi">
    report?: ReportListRelationFilter
  }

  export type formresumenesferiOrderByWithRelationInput = {
    resID?: SortOrder
    resContent?: SortOrder
    report?: reportOrderByRelationAggregateInput
    _relevance?: formresumenesferiOrderByRelevanceInput
  }

  export type formresumenesferiWhereUniqueInput = Prisma.AtLeast<{
    resID?: string
    AND?: formresumenesferiWhereInput | formresumenesferiWhereInput[]
    OR?: formresumenesferiWhereInput[]
    NOT?: formresumenesferiWhereInput | formresumenesferiWhereInput[]
    resContent?: JsonFilter<"formresumenesferi">
    report?: ReportListRelationFilter
  }, "resID">

  export type formresumenesferiOrderByWithAggregationInput = {
    resID?: SortOrder
    resContent?: SortOrder
    _count?: formresumenesferiCountOrderByAggregateInput
    _max?: formresumenesferiMaxOrderByAggregateInput
    _min?: formresumenesferiMinOrderByAggregateInput
  }

  export type formresumenesferiScalarWhereWithAggregatesInput = {
    AND?: formresumenesferiScalarWhereWithAggregatesInput | formresumenesferiScalarWhereWithAggregatesInput[]
    OR?: formresumenesferiScalarWhereWithAggregatesInput[]
    NOT?: formresumenesferiScalarWhereWithAggregatesInput | formresumenesferiScalarWhereWithAggregatesInput[]
    resID?: StringWithAggregatesFilter<"formresumenesferi"> | string
    resContent?: JsonWithAggregatesFilter<"formresumenesferi">
  }

  export type reportWhereInput = {
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    repID?: StringFilter<"report"> | string
    stuID?: StringFilter<"report"> | string
    roomID?: StringFilter<"report"> | string
    carID?: StringFilter<"report"> | string
    detID?: StringFilter<"report"> | string
    esfID?: StringFilter<"report"> | string
    renID?: StringFilter<"report"> | string
    impID?: StringFilter<"report"> | string
    ingID?: StringFilter<"report"> | string
    actID?: StringFilter<"report"> | string
    resID?: StringFilter<"report"> | string
    r110ID?: StringFilter<"report"> | string
    formactivosfijos?: XOR<FormactivosfijosScalarRelationFilter, formactivosfijosWhereInput>
    formcaratula?: XOR<FormcaratulaScalarRelationFilter, formcaratulaWhereInput>
    formdetallerenglones?: XOR<FormdetallerenglonesScalarRelationFilter, formdetallerenglonesWhereInput>
    formesfpatrimonio?: XOR<FormesfpatrimonioScalarRelationFilter, formesfpatrimonioWhereInput>
    formimpuestodiferido?: XOR<FormimpuestodiferidoScalarRelationFilter, formimpuestodiferidoWhereInput>
    formingresosfancturacion?: XOR<FormingresosfancturacionScalarRelationFilter, formingresosfancturacionWhereInput>
    formr110?: XOR<Formr110ScalarRelationFilter, formr110WhereInput>
    formrentaliquida?: XOR<FormrentaliquidaScalarRelationFilter, formrentaliquidaWhereInput>
    formresumenesferi?: XOR<FormresumenesferiScalarRelationFilter, formresumenesferiWhereInput>
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type reportOrderByWithRelationInput = {
    repID?: SortOrder
    stuID?: SortOrder
    roomID?: SortOrder
    carID?: SortOrder
    detID?: SortOrder
    esfID?: SortOrder
    renID?: SortOrder
    impID?: SortOrder
    ingID?: SortOrder
    actID?: SortOrder
    resID?: SortOrder
    r110ID?: SortOrder
    formactivosfijos?: formactivosfijosOrderByWithRelationInput
    formcaratula?: formcaratulaOrderByWithRelationInput
    formdetallerenglones?: formdetallerenglonesOrderByWithRelationInput
    formesfpatrimonio?: formesfpatrimonioOrderByWithRelationInput
    formimpuestodiferido?: formimpuestodiferidoOrderByWithRelationInput
    formingresosfancturacion?: formingresosfancturacionOrderByWithRelationInput
    formr110?: formr110OrderByWithRelationInput
    formrentaliquida?: formrentaliquidaOrderByWithRelationInput
    formresumenesferi?: formresumenesferiOrderByWithRelationInput
    room?: roomOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: reportOrderByRelevanceInput
  }

  export type reportWhereUniqueInput = Prisma.AtLeast<{
    repID?: string
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    stuID?: StringFilter<"report"> | string
    roomID?: StringFilter<"report"> | string
    carID?: StringFilter<"report"> | string
    detID?: StringFilter<"report"> | string
    esfID?: StringFilter<"report"> | string
    renID?: StringFilter<"report"> | string
    impID?: StringFilter<"report"> | string
    ingID?: StringFilter<"report"> | string
    actID?: StringFilter<"report"> | string
    resID?: StringFilter<"report"> | string
    r110ID?: StringFilter<"report"> | string
    formactivosfijos?: XOR<FormactivosfijosScalarRelationFilter, formactivosfijosWhereInput>
    formcaratula?: XOR<FormcaratulaScalarRelationFilter, formcaratulaWhereInput>
    formdetallerenglones?: XOR<FormdetallerenglonesScalarRelationFilter, formdetallerenglonesWhereInput>
    formesfpatrimonio?: XOR<FormesfpatrimonioScalarRelationFilter, formesfpatrimonioWhereInput>
    formimpuestodiferido?: XOR<FormimpuestodiferidoScalarRelationFilter, formimpuestodiferidoWhereInput>
    formingresosfancturacion?: XOR<FormingresosfancturacionScalarRelationFilter, formingresosfancturacionWhereInput>
    formr110?: XOR<Formr110ScalarRelationFilter, formr110WhereInput>
    formrentaliquida?: XOR<FormrentaliquidaScalarRelationFilter, formrentaliquidaWhereInput>
    formresumenesferi?: XOR<FormresumenesferiScalarRelationFilter, formresumenesferiWhereInput>
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "repID">

  export type reportOrderByWithAggregationInput = {
    repID?: SortOrder
    stuID?: SortOrder
    roomID?: SortOrder
    carID?: SortOrder
    detID?: SortOrder
    esfID?: SortOrder
    renID?: SortOrder
    impID?: SortOrder
    ingID?: SortOrder
    actID?: SortOrder
    resID?: SortOrder
    r110ID?: SortOrder
    _count?: reportCountOrderByAggregateInput
    _max?: reportMaxOrderByAggregateInput
    _min?: reportMinOrderByAggregateInput
  }

  export type reportScalarWhereWithAggregatesInput = {
    AND?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    OR?: reportScalarWhereWithAggregatesInput[]
    NOT?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    repID?: StringWithAggregatesFilter<"report"> | string
    stuID?: StringWithAggregatesFilter<"report"> | string
    roomID?: StringWithAggregatesFilter<"report"> | string
    carID?: StringWithAggregatesFilter<"report"> | string
    detID?: StringWithAggregatesFilter<"report"> | string
    esfID?: StringWithAggregatesFilter<"report"> | string
    renID?: StringWithAggregatesFilter<"report"> | string
    impID?: StringWithAggregatesFilter<"report"> | string
    ingID?: StringWithAggregatesFilter<"report"> | string
    actID?: StringWithAggregatesFilter<"report"> | string
    resID?: StringWithAggregatesFilter<"report"> | string
    r110ID?: StringWithAggregatesFilter<"report"> | string
  }

  export type roomWhereInput = {
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    roomID?: StringFilter<"room"> | string
    roomName?: StringFilter<"room"> | string
    roomPassword?: StringFilter<"room"> | string
    roomDate?: DateTimeFilter<"room"> | Date | string
    roomStatus?: Enumroom_roomStatusFilter<"room"> | $Enums.room_roomStatus
    roomAnswer?: JsonFilter<"room">
    usuID?: StringFilter<"room"> | string
    report?: ReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    student?: StudentListRelationFilter
  }

  export type roomOrderByWithRelationInput = {
    roomID?: SortOrder
    roomName?: SortOrder
    roomPassword?: SortOrder
    roomDate?: SortOrder
    roomStatus?: SortOrder
    roomAnswer?: SortOrder
    usuID?: SortOrder
    report?: reportOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    student?: studentOrderByRelationAggregateInput
    _relevance?: roomOrderByRelevanceInput
  }

  export type roomWhereUniqueInput = Prisma.AtLeast<{
    roomID?: string
    roomPassword?: string
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    roomName?: StringFilter<"room"> | string
    roomDate?: DateTimeFilter<"room"> | Date | string
    roomStatus?: Enumroom_roomStatusFilter<"room"> | $Enums.room_roomStatus
    roomAnswer?: JsonFilter<"room">
    usuID?: StringFilter<"room"> | string
    report?: ReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    student?: StudentListRelationFilter
  }, "roomID" | "roomPassword">

  export type roomOrderByWithAggregationInput = {
    roomID?: SortOrder
    roomName?: SortOrder
    roomPassword?: SortOrder
    roomDate?: SortOrder
    roomStatus?: SortOrder
    roomAnswer?: SortOrder
    usuID?: SortOrder
    _count?: roomCountOrderByAggregateInput
    _max?: roomMaxOrderByAggregateInput
    _min?: roomMinOrderByAggregateInput
  }

  export type roomScalarWhereWithAggregatesInput = {
    AND?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    OR?: roomScalarWhereWithAggregatesInput[]
    NOT?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    roomID?: StringWithAggregatesFilter<"room"> | string
    roomName?: StringWithAggregatesFilter<"room"> | string
    roomPassword?: StringWithAggregatesFilter<"room"> | string
    roomDate?: DateTimeWithAggregatesFilter<"room"> | Date | string
    roomStatus?: Enumroom_roomStatusWithAggregatesFilter<"room"> | $Enums.room_roomStatus
    roomAnswer?: JsonWithAggregatesFilter<"room">
    usuID?: StringWithAggregatesFilter<"room"> | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    stuID?: StringFilter<"student"> | string
    stuCedula?: StringFilter<"student"> | string
    roomID?: StringFilter<"student"> | string
    report?: ReportListRelationFilter
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
  }

  export type studentOrderByWithRelationInput = {
    stuID?: SortOrder
    stuCedula?: SortOrder
    roomID?: SortOrder
    report?: reportOrderByRelationAggregateInput
    room?: roomOrderByWithRelationInput
    _relevance?: studentOrderByRelevanceInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    stuID?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    stuCedula?: StringFilter<"student"> | string
    roomID?: StringFilter<"student"> | string
    report?: ReportListRelationFilter
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
  }, "stuID">

  export type studentOrderByWithAggregationInput = {
    stuID?: SortOrder
    stuCedula?: SortOrder
    roomID?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    stuID?: StringWithAggregatesFilter<"student"> | string
    stuCedula?: StringWithAggregatesFilter<"student"> | string
    roomID?: StringWithAggregatesFilter<"student"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    usuID?: StringFilter<"user"> | string
    usuName?: StringFilter<"user"> | string
    usuEmail?: StringFilter<"user"> | string
    usuPassword?: StringFilter<"user"> | string
    usuRole?: Enumuser_usuRoleFilter<"user"> | $Enums.user_usuRole
    room?: RoomListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    usuID?: SortOrder
    usuName?: SortOrder
    usuEmail?: SortOrder
    usuPassword?: SortOrder
    usuRole?: SortOrder
    room?: roomOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    usuID?: string
    usuEmail?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    usuName?: StringFilter<"user"> | string
    usuPassword?: StringFilter<"user"> | string
    usuRole?: Enumuser_usuRoleFilter<"user"> | $Enums.user_usuRole
    room?: RoomListRelationFilter
  }, "usuID" | "usuEmail">

  export type userOrderByWithAggregationInput = {
    usuID?: SortOrder
    usuName?: SortOrder
    usuEmail?: SortOrder
    usuPassword?: SortOrder
    usuRole?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    usuID?: StringWithAggregatesFilter<"user"> | string
    usuName?: StringWithAggregatesFilter<"user"> | string
    usuEmail?: StringWithAggregatesFilter<"user"> | string
    usuPassword?: StringWithAggregatesFilter<"user"> | string
    usuRole?: Enumuser_usuRoleWithAggregatesFilter<"user"> | $Enums.user_usuRole
  }

  export type formactivosfijosCreateInput = {
    actID?: string
    actContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormactivosfijosInput
  }

  export type formactivosfijosUncheckedCreateInput = {
    actID?: string
    actContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormactivosfijosInput
  }

  export type formactivosfijosUpdateInput = {
    actID?: StringFieldUpdateOperationsInput | string
    actContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormactivosfijosNestedInput
  }

  export type formactivosfijosUncheckedUpdateInput = {
    actID?: StringFieldUpdateOperationsInput | string
    actContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormactivosfijosNestedInput
  }

  export type formactivosfijosCreateManyInput = {
    actID?: string
    actContent: JsonNullValueInput | InputJsonValue
  }

  export type formactivosfijosUpdateManyMutationInput = {
    actID?: StringFieldUpdateOperationsInput | string
    actContent?: JsonNullValueInput | InputJsonValue
  }

  export type formactivosfijosUncheckedUpdateManyInput = {
    actID?: StringFieldUpdateOperationsInput | string
    actContent?: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaCreateInput = {
    carID?: string
    carContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormcaratulaInput
  }

  export type formcaratulaUncheckedCreateInput = {
    carID?: string
    carContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormcaratulaInput
  }

  export type formcaratulaUpdateInput = {
    carID?: StringFieldUpdateOperationsInput | string
    carContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormcaratulaNestedInput
  }

  export type formcaratulaUncheckedUpdateInput = {
    carID?: StringFieldUpdateOperationsInput | string
    carContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormcaratulaNestedInput
  }

  export type formcaratulaCreateManyInput = {
    carID?: string
    carContent: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaUpdateManyMutationInput = {
    carID?: StringFieldUpdateOperationsInput | string
    carContent?: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaUncheckedUpdateManyInput = {
    carID?: StringFieldUpdateOperationsInput | string
    carContent?: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesCreateInput = {
    detID?: string
    detContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormdetallerenglonesInput
  }

  export type formdetallerenglonesUncheckedCreateInput = {
    detID?: string
    detContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormdetallerenglonesInput
  }

  export type formdetallerenglonesUpdateInput = {
    detID?: StringFieldUpdateOperationsInput | string
    detContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormdetallerenglonesNestedInput
  }

  export type formdetallerenglonesUncheckedUpdateInput = {
    detID?: StringFieldUpdateOperationsInput | string
    detContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormdetallerenglonesNestedInput
  }

  export type formdetallerenglonesCreateManyInput = {
    detID?: string
    detContent: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesUpdateManyMutationInput = {
    detID?: StringFieldUpdateOperationsInput | string
    detContent?: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesUncheckedUpdateManyInput = {
    detID?: StringFieldUpdateOperationsInput | string
    detContent?: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioCreateInput = {
    esfID?: string
    esfContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormesfpatrimonioInput
  }

  export type formesfpatrimonioUncheckedCreateInput = {
    esfID?: string
    esfContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormesfpatrimonioInput
  }

  export type formesfpatrimonioUpdateInput = {
    esfID?: StringFieldUpdateOperationsInput | string
    esfContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormesfpatrimonioNestedInput
  }

  export type formesfpatrimonioUncheckedUpdateInput = {
    esfID?: StringFieldUpdateOperationsInput | string
    esfContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormesfpatrimonioNestedInput
  }

  export type formesfpatrimonioCreateManyInput = {
    esfID?: string
    esfContent: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioUpdateManyMutationInput = {
    esfID?: StringFieldUpdateOperationsInput | string
    esfContent?: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioUncheckedUpdateManyInput = {
    esfID?: StringFieldUpdateOperationsInput | string
    esfContent?: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoCreateInput = {
    impID?: string
    impContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormimpuestodiferidoInput
  }

  export type formimpuestodiferidoUncheckedCreateInput = {
    impID?: string
    impContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormimpuestodiferidoInput
  }

  export type formimpuestodiferidoUpdateInput = {
    impID?: StringFieldUpdateOperationsInput | string
    impContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormimpuestodiferidoNestedInput
  }

  export type formimpuestodiferidoUncheckedUpdateInput = {
    impID?: StringFieldUpdateOperationsInput | string
    impContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormimpuestodiferidoNestedInput
  }

  export type formimpuestodiferidoCreateManyInput = {
    impID?: string
    impContent: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoUpdateManyMutationInput = {
    impID?: StringFieldUpdateOperationsInput | string
    impContent?: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoUncheckedUpdateManyInput = {
    impID?: StringFieldUpdateOperationsInput | string
    impContent?: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionCreateInput = {
    ingID?: string
    ingContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormingresosfancturacionInput
  }

  export type formingresosfancturacionUncheckedCreateInput = {
    ingID?: string
    ingContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormingresosfancturacionInput
  }

  export type formingresosfancturacionUpdateInput = {
    ingID?: StringFieldUpdateOperationsInput | string
    ingContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormingresosfancturacionNestedInput
  }

  export type formingresosfancturacionUncheckedUpdateInput = {
    ingID?: StringFieldUpdateOperationsInput | string
    ingContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormingresosfancturacionNestedInput
  }

  export type formingresosfancturacionCreateManyInput = {
    ingID?: string
    ingContent: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionUpdateManyMutationInput = {
    ingID?: StringFieldUpdateOperationsInput | string
    ingContent?: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionUncheckedUpdateManyInput = {
    ingID?: StringFieldUpdateOperationsInput | string
    ingContent?: JsonNullValueInput | InputJsonValue
  }

  export type formr110CreateInput = {
    r110ID?: string
    r110Content: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormr110Input
  }

  export type formr110UncheckedCreateInput = {
    r110ID?: string
    r110Content: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormr110Input
  }

  export type formr110UpdateInput = {
    r110ID?: StringFieldUpdateOperationsInput | string
    r110Content?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormr110NestedInput
  }

  export type formr110UncheckedUpdateInput = {
    r110ID?: StringFieldUpdateOperationsInput | string
    r110Content?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormr110NestedInput
  }

  export type formr110CreateManyInput = {
    r110ID?: string
    r110Content: JsonNullValueInput | InputJsonValue
  }

  export type formr110UpdateManyMutationInput = {
    r110ID?: StringFieldUpdateOperationsInput | string
    r110Content?: JsonNullValueInput | InputJsonValue
  }

  export type formr110UncheckedUpdateManyInput = {
    r110ID?: StringFieldUpdateOperationsInput | string
    r110Content?: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaCreateInput = {
    renID?: string
    renContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormrentaliquidaInput
  }

  export type formrentaliquidaUncheckedCreateInput = {
    renID?: string
    renContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormrentaliquidaInput
  }

  export type formrentaliquidaUpdateInput = {
    renID?: StringFieldUpdateOperationsInput | string
    renContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormrentaliquidaNestedInput
  }

  export type formrentaliquidaUncheckedUpdateInput = {
    renID?: StringFieldUpdateOperationsInput | string
    renContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormrentaliquidaNestedInput
  }

  export type formrentaliquidaCreateManyInput = {
    renID?: string
    renContent: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaUpdateManyMutationInput = {
    renID?: StringFieldUpdateOperationsInput | string
    renContent?: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaUncheckedUpdateManyInput = {
    renID?: StringFieldUpdateOperationsInput | string
    renContent?: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiCreateInput = {
    resID?: string
    resContent: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutFormresumenesferiInput
  }

  export type formresumenesferiUncheckedCreateInput = {
    resID?: string
    resContent: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutFormresumenesferiInput
  }

  export type formresumenesferiUpdateInput = {
    resID?: StringFieldUpdateOperationsInput | string
    resContent?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutFormresumenesferiNestedInput
  }

  export type formresumenesferiUncheckedUpdateInput = {
    resID?: StringFieldUpdateOperationsInput | string
    resContent?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutFormresumenesferiNestedInput
  }

  export type formresumenesferiCreateManyInput = {
    resID?: string
    resContent: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiUpdateManyMutationInput = {
    resID?: StringFieldUpdateOperationsInput | string
    resContent?: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiUncheckedUpdateManyInput = {
    resID?: StringFieldUpdateOperationsInput | string
    resContent?: JsonNullValueInput | InputJsonValue
  }

  export type reportCreateInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateManyMutationInput = {
    repID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type roomCreateInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutRoomInput
    user: userCreateNestedOneWithoutRoomInput
    student?: studentCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    usuID: string
    report?: reportUncheckedCreateNestedManyWithoutRoomInput
    student?: studentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomUpdateInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutRoomNestedInput
    user?: userUpdateOneRequiredWithoutRoomNestedInput
    student?: studentUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    usuID?: StringFieldUpdateOperationsInput | string
    report?: reportUncheckedUpdateManyWithoutRoomNestedInput
    student?: studentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateManyInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    usuID: string
  }

  export type roomUpdateManyMutationInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
  }

  export type roomUncheckedUpdateManyInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    usuID?: StringFieldUpdateOperationsInput | string
  }

  export type studentCreateInput = {
    stuID?: string
    stuCedula: string
    report?: reportCreateNestedManyWithoutStudentInput
    room: roomCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    stuID?: string
    stuCedula: string
    roomID: string
    report?: reportUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    report?: reportUpdateManyWithoutStudentNestedInput
    room?: roomUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    report?: reportUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    stuID?: string
    stuCedula: string
    roomID: string
  }

  export type studentUpdateManyMutationInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
  }

  export type studentUncheckedUpdateManyInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    usuID?: string
    usuName: string
    usuEmail: string
    usuPassword: string
    usuRole: $Enums.user_usuRole
    room?: roomCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    usuID?: string
    usuName: string
    usuEmail: string
    usuPassword: string
    usuRole: $Enums.user_usuRole
    room?: roomUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    usuID?: StringFieldUpdateOperationsInput | string
    usuName?: StringFieldUpdateOperationsInput | string
    usuEmail?: StringFieldUpdateOperationsInput | string
    usuPassword?: StringFieldUpdateOperationsInput | string
    usuRole?: Enumuser_usuRoleFieldUpdateOperationsInput | $Enums.user_usuRole
    room?: roomUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    usuID?: StringFieldUpdateOperationsInput | string
    usuName?: StringFieldUpdateOperationsInput | string
    usuEmail?: StringFieldUpdateOperationsInput | string
    usuPassword?: StringFieldUpdateOperationsInput | string
    usuRole?: Enumuser_usuRoleFieldUpdateOperationsInput | $Enums.user_usuRole
    room?: roomUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    usuID?: string
    usuName: string
    usuEmail: string
    usuPassword: string
    usuRole: $Enums.user_usuRole
  }

  export type userUpdateManyMutationInput = {
    usuID?: StringFieldUpdateOperationsInput | string
    usuName?: StringFieldUpdateOperationsInput | string
    usuEmail?: StringFieldUpdateOperationsInput | string
    usuPassword?: StringFieldUpdateOperationsInput | string
    usuRole?: Enumuser_usuRoleFieldUpdateOperationsInput | $Enums.user_usuRole
  }

  export type userUncheckedUpdateManyInput = {
    usuID?: StringFieldUpdateOperationsInput | string
    usuName?: StringFieldUpdateOperationsInput | string
    usuEmail?: StringFieldUpdateOperationsInput | string
    usuPassword?: StringFieldUpdateOperationsInput | string
    usuRole?: Enumuser_usuRoleFieldUpdateOperationsInput | $Enums.user_usuRole
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReportListRelationFilter = {
    every?: reportWhereInput
    some?: reportWhereInput
    none?: reportWhereInput
  }

  export type reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formactivosfijosOrderByRelevanceInput = {
    fields: formactivosfijosOrderByRelevanceFieldEnum | formactivosfijosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formactivosfijosCountOrderByAggregateInput = {
    actID?: SortOrder
    actContent?: SortOrder
  }

  export type formactivosfijosMaxOrderByAggregateInput = {
    actID?: SortOrder
  }

  export type formactivosfijosMinOrderByAggregateInput = {
    actID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type formcaratulaOrderByRelevanceInput = {
    fields: formcaratulaOrderByRelevanceFieldEnum | formcaratulaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formcaratulaCountOrderByAggregateInput = {
    carID?: SortOrder
    carContent?: SortOrder
  }

  export type formcaratulaMaxOrderByAggregateInput = {
    carID?: SortOrder
  }

  export type formcaratulaMinOrderByAggregateInput = {
    carID?: SortOrder
  }

  export type formdetallerenglonesOrderByRelevanceInput = {
    fields: formdetallerenglonesOrderByRelevanceFieldEnum | formdetallerenglonesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formdetallerenglonesCountOrderByAggregateInput = {
    detID?: SortOrder
    detContent?: SortOrder
  }

  export type formdetallerenglonesMaxOrderByAggregateInput = {
    detID?: SortOrder
  }

  export type formdetallerenglonesMinOrderByAggregateInput = {
    detID?: SortOrder
  }

  export type formesfpatrimonioOrderByRelevanceInput = {
    fields: formesfpatrimonioOrderByRelevanceFieldEnum | formesfpatrimonioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formesfpatrimonioCountOrderByAggregateInput = {
    esfID?: SortOrder
    esfContent?: SortOrder
  }

  export type formesfpatrimonioMaxOrderByAggregateInput = {
    esfID?: SortOrder
  }

  export type formesfpatrimonioMinOrderByAggregateInput = {
    esfID?: SortOrder
  }

  export type formimpuestodiferidoOrderByRelevanceInput = {
    fields: formimpuestodiferidoOrderByRelevanceFieldEnum | formimpuestodiferidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formimpuestodiferidoCountOrderByAggregateInput = {
    impID?: SortOrder
    impContent?: SortOrder
  }

  export type formimpuestodiferidoMaxOrderByAggregateInput = {
    impID?: SortOrder
  }

  export type formimpuestodiferidoMinOrderByAggregateInput = {
    impID?: SortOrder
  }

  export type formingresosfancturacionOrderByRelevanceInput = {
    fields: formingresosfancturacionOrderByRelevanceFieldEnum | formingresosfancturacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formingresosfancturacionCountOrderByAggregateInput = {
    ingID?: SortOrder
    ingContent?: SortOrder
  }

  export type formingresosfancturacionMaxOrderByAggregateInput = {
    ingID?: SortOrder
  }

  export type formingresosfancturacionMinOrderByAggregateInput = {
    ingID?: SortOrder
  }

  export type formr110OrderByRelevanceInput = {
    fields: formr110OrderByRelevanceFieldEnum | formr110OrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formr110CountOrderByAggregateInput = {
    r110ID?: SortOrder
    r110Content?: SortOrder
  }

  export type formr110MaxOrderByAggregateInput = {
    r110ID?: SortOrder
  }

  export type formr110MinOrderByAggregateInput = {
    r110ID?: SortOrder
  }

  export type formrentaliquidaOrderByRelevanceInput = {
    fields: formrentaliquidaOrderByRelevanceFieldEnum | formrentaliquidaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formrentaliquidaCountOrderByAggregateInput = {
    renID?: SortOrder
    renContent?: SortOrder
  }

  export type formrentaliquidaMaxOrderByAggregateInput = {
    renID?: SortOrder
  }

  export type formrentaliquidaMinOrderByAggregateInput = {
    renID?: SortOrder
  }

  export type formresumenesferiOrderByRelevanceInput = {
    fields: formresumenesferiOrderByRelevanceFieldEnum | formresumenesferiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formresumenesferiCountOrderByAggregateInput = {
    resID?: SortOrder
    resContent?: SortOrder
  }

  export type formresumenesferiMaxOrderByAggregateInput = {
    resID?: SortOrder
  }

  export type formresumenesferiMinOrderByAggregateInput = {
    resID?: SortOrder
  }

  export type FormactivosfijosScalarRelationFilter = {
    is?: formactivosfijosWhereInput
    isNot?: formactivosfijosWhereInput
  }

  export type FormcaratulaScalarRelationFilter = {
    is?: formcaratulaWhereInput
    isNot?: formcaratulaWhereInput
  }

  export type FormdetallerenglonesScalarRelationFilter = {
    is?: formdetallerenglonesWhereInput
    isNot?: formdetallerenglonesWhereInput
  }

  export type FormesfpatrimonioScalarRelationFilter = {
    is?: formesfpatrimonioWhereInput
    isNot?: formesfpatrimonioWhereInput
  }

  export type FormimpuestodiferidoScalarRelationFilter = {
    is?: formimpuestodiferidoWhereInput
    isNot?: formimpuestodiferidoWhereInput
  }

  export type FormingresosfancturacionScalarRelationFilter = {
    is?: formingresosfancturacionWhereInput
    isNot?: formingresosfancturacionWhereInput
  }

  export type Formr110ScalarRelationFilter = {
    is?: formr110WhereInput
    isNot?: formr110WhereInput
  }

  export type FormrentaliquidaScalarRelationFilter = {
    is?: formrentaliquidaWhereInput
    isNot?: formrentaliquidaWhereInput
  }

  export type FormresumenesferiScalarRelationFilter = {
    is?: formresumenesferiWhereInput
    isNot?: formresumenesferiWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: roomWhereInput
    isNot?: roomWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type reportOrderByRelevanceInput = {
    fields: reportOrderByRelevanceFieldEnum | reportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reportCountOrderByAggregateInput = {
    repID?: SortOrder
    stuID?: SortOrder
    roomID?: SortOrder
    carID?: SortOrder
    detID?: SortOrder
    esfID?: SortOrder
    renID?: SortOrder
    impID?: SortOrder
    ingID?: SortOrder
    actID?: SortOrder
    resID?: SortOrder
    r110ID?: SortOrder
  }

  export type reportMaxOrderByAggregateInput = {
    repID?: SortOrder
    stuID?: SortOrder
    roomID?: SortOrder
    carID?: SortOrder
    detID?: SortOrder
    esfID?: SortOrder
    renID?: SortOrder
    impID?: SortOrder
    ingID?: SortOrder
    actID?: SortOrder
    resID?: SortOrder
    r110ID?: SortOrder
  }

  export type reportMinOrderByAggregateInput = {
    repID?: SortOrder
    stuID?: SortOrder
    roomID?: SortOrder
    carID?: SortOrder
    detID?: SortOrder
    esfID?: SortOrder
    renID?: SortOrder
    impID?: SortOrder
    ingID?: SortOrder
    actID?: SortOrder
    resID?: SortOrder
    r110ID?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumroom_roomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.room_roomStatus | Enumroom_roomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.room_roomStatus[]
    notIn?: $Enums.room_roomStatus[]
    not?: NestedEnumroom_roomStatusFilter<$PrismaModel> | $Enums.room_roomStatus
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomOrderByRelevanceInput = {
    fields: roomOrderByRelevanceFieldEnum | roomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type roomCountOrderByAggregateInput = {
    roomID?: SortOrder
    roomName?: SortOrder
    roomPassword?: SortOrder
    roomDate?: SortOrder
    roomStatus?: SortOrder
    roomAnswer?: SortOrder
    usuID?: SortOrder
  }

  export type roomMaxOrderByAggregateInput = {
    roomID?: SortOrder
    roomName?: SortOrder
    roomPassword?: SortOrder
    roomDate?: SortOrder
    roomStatus?: SortOrder
    usuID?: SortOrder
  }

  export type roomMinOrderByAggregateInput = {
    roomID?: SortOrder
    roomName?: SortOrder
    roomPassword?: SortOrder
    roomDate?: SortOrder
    roomStatus?: SortOrder
    usuID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumroom_roomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_roomStatus | Enumroom_roomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.room_roomStatus[]
    notIn?: $Enums.room_roomStatus[]
    not?: NestedEnumroom_roomStatusWithAggregatesFilter<$PrismaModel> | $Enums.room_roomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_roomStatusFilter<$PrismaModel>
    _max?: NestedEnumroom_roomStatusFilter<$PrismaModel>
  }

  export type studentOrderByRelevanceInput = {
    fields: studentOrderByRelevanceFieldEnum | studentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentCountOrderByAggregateInput = {
    stuID?: SortOrder
    stuCedula?: SortOrder
    roomID?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    stuID?: SortOrder
    stuCedula?: SortOrder
    roomID?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    stuID?: SortOrder
    stuCedula?: SortOrder
    roomID?: SortOrder
  }

  export type Enumuser_usuRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usuRole | Enumuser_usuRoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_usuRole[]
    notIn?: $Enums.user_usuRole[]
    not?: NestedEnumuser_usuRoleFilter<$PrismaModel> | $Enums.user_usuRole
  }

  export type RoomListRelationFilter = {
    every?: roomWhereInput
    some?: roomWhereInput
    none?: roomWhereInput
  }

  export type roomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    usuID?: SortOrder
    usuName?: SortOrder
    usuEmail?: SortOrder
    usuPassword?: SortOrder
    usuRole?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    usuID?: SortOrder
    usuName?: SortOrder
    usuEmail?: SortOrder
    usuPassword?: SortOrder
    usuRole?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    usuID?: SortOrder
    usuName?: SortOrder
    usuEmail?: SortOrder
    usuPassword?: SortOrder
    usuRole?: SortOrder
  }

  export type Enumuser_usuRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usuRole | Enumuser_usuRoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_usuRole[]
    notIn?: $Enums.user_usuRole[]
    not?: NestedEnumuser_usuRoleWithAggregatesFilter<$PrismaModel> | $Enums.user_usuRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_usuRoleFilter<$PrismaModel>
    _max?: NestedEnumuser_usuRoleFilter<$PrismaModel>
  }

  export type reportCreateNestedManyWithoutFormactivosfijosInput = {
    create?: XOR<reportCreateWithoutFormactivosfijosInput, reportUncheckedCreateWithoutFormactivosfijosInput> | reportCreateWithoutFormactivosfijosInput[] | reportUncheckedCreateWithoutFormactivosfijosInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormactivosfijosInput | reportCreateOrConnectWithoutFormactivosfijosInput[]
    createMany?: reportCreateManyFormactivosfijosInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormactivosfijosInput = {
    create?: XOR<reportCreateWithoutFormactivosfijosInput, reportUncheckedCreateWithoutFormactivosfijosInput> | reportCreateWithoutFormactivosfijosInput[] | reportUncheckedCreateWithoutFormactivosfijosInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormactivosfijosInput | reportCreateOrConnectWithoutFormactivosfijosInput[]
    createMany?: reportCreateManyFormactivosfijosInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type reportUpdateManyWithoutFormactivosfijosNestedInput = {
    create?: XOR<reportCreateWithoutFormactivosfijosInput, reportUncheckedCreateWithoutFormactivosfijosInput> | reportCreateWithoutFormactivosfijosInput[] | reportUncheckedCreateWithoutFormactivosfijosInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormactivosfijosInput | reportCreateOrConnectWithoutFormactivosfijosInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormactivosfijosInput | reportUpsertWithWhereUniqueWithoutFormactivosfijosInput[]
    createMany?: reportCreateManyFormactivosfijosInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormactivosfijosInput | reportUpdateWithWhereUniqueWithoutFormactivosfijosInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormactivosfijosInput | reportUpdateManyWithWhereWithoutFormactivosfijosInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormactivosfijosNestedInput = {
    create?: XOR<reportCreateWithoutFormactivosfijosInput, reportUncheckedCreateWithoutFormactivosfijosInput> | reportCreateWithoutFormactivosfijosInput[] | reportUncheckedCreateWithoutFormactivosfijosInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormactivosfijosInput | reportCreateOrConnectWithoutFormactivosfijosInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormactivosfijosInput | reportUpsertWithWhereUniqueWithoutFormactivosfijosInput[]
    createMany?: reportCreateManyFormactivosfijosInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormactivosfijosInput | reportUpdateWithWhereUniqueWithoutFormactivosfijosInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormactivosfijosInput | reportUpdateManyWithWhereWithoutFormactivosfijosInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormcaratulaInput = {
    create?: XOR<reportCreateWithoutFormcaratulaInput, reportUncheckedCreateWithoutFormcaratulaInput> | reportCreateWithoutFormcaratulaInput[] | reportUncheckedCreateWithoutFormcaratulaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormcaratulaInput | reportCreateOrConnectWithoutFormcaratulaInput[]
    createMany?: reportCreateManyFormcaratulaInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormcaratulaInput = {
    create?: XOR<reportCreateWithoutFormcaratulaInput, reportUncheckedCreateWithoutFormcaratulaInput> | reportCreateWithoutFormcaratulaInput[] | reportUncheckedCreateWithoutFormcaratulaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormcaratulaInput | reportCreateOrConnectWithoutFormcaratulaInput[]
    createMany?: reportCreateManyFormcaratulaInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormcaratulaNestedInput = {
    create?: XOR<reportCreateWithoutFormcaratulaInput, reportUncheckedCreateWithoutFormcaratulaInput> | reportCreateWithoutFormcaratulaInput[] | reportUncheckedCreateWithoutFormcaratulaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormcaratulaInput | reportCreateOrConnectWithoutFormcaratulaInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormcaratulaInput | reportUpsertWithWhereUniqueWithoutFormcaratulaInput[]
    createMany?: reportCreateManyFormcaratulaInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormcaratulaInput | reportUpdateWithWhereUniqueWithoutFormcaratulaInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormcaratulaInput | reportUpdateManyWithWhereWithoutFormcaratulaInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormcaratulaNestedInput = {
    create?: XOR<reportCreateWithoutFormcaratulaInput, reportUncheckedCreateWithoutFormcaratulaInput> | reportCreateWithoutFormcaratulaInput[] | reportUncheckedCreateWithoutFormcaratulaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormcaratulaInput | reportCreateOrConnectWithoutFormcaratulaInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormcaratulaInput | reportUpsertWithWhereUniqueWithoutFormcaratulaInput[]
    createMany?: reportCreateManyFormcaratulaInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormcaratulaInput | reportUpdateWithWhereUniqueWithoutFormcaratulaInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormcaratulaInput | reportUpdateManyWithWhereWithoutFormcaratulaInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormdetallerenglonesInput = {
    create?: XOR<reportCreateWithoutFormdetallerenglonesInput, reportUncheckedCreateWithoutFormdetallerenglonesInput> | reportCreateWithoutFormdetallerenglonesInput[] | reportUncheckedCreateWithoutFormdetallerenglonesInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormdetallerenglonesInput | reportCreateOrConnectWithoutFormdetallerenglonesInput[]
    createMany?: reportCreateManyFormdetallerenglonesInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormdetallerenglonesInput = {
    create?: XOR<reportCreateWithoutFormdetallerenglonesInput, reportUncheckedCreateWithoutFormdetallerenglonesInput> | reportCreateWithoutFormdetallerenglonesInput[] | reportUncheckedCreateWithoutFormdetallerenglonesInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormdetallerenglonesInput | reportCreateOrConnectWithoutFormdetallerenglonesInput[]
    createMany?: reportCreateManyFormdetallerenglonesInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormdetallerenglonesNestedInput = {
    create?: XOR<reportCreateWithoutFormdetallerenglonesInput, reportUncheckedCreateWithoutFormdetallerenglonesInput> | reportCreateWithoutFormdetallerenglonesInput[] | reportUncheckedCreateWithoutFormdetallerenglonesInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormdetallerenglonesInput | reportCreateOrConnectWithoutFormdetallerenglonesInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormdetallerenglonesInput | reportUpsertWithWhereUniqueWithoutFormdetallerenglonesInput[]
    createMany?: reportCreateManyFormdetallerenglonesInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormdetallerenglonesInput | reportUpdateWithWhereUniqueWithoutFormdetallerenglonesInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormdetallerenglonesInput | reportUpdateManyWithWhereWithoutFormdetallerenglonesInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormdetallerenglonesNestedInput = {
    create?: XOR<reportCreateWithoutFormdetallerenglonesInput, reportUncheckedCreateWithoutFormdetallerenglonesInput> | reportCreateWithoutFormdetallerenglonesInput[] | reportUncheckedCreateWithoutFormdetallerenglonesInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormdetallerenglonesInput | reportCreateOrConnectWithoutFormdetallerenglonesInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormdetallerenglonesInput | reportUpsertWithWhereUniqueWithoutFormdetallerenglonesInput[]
    createMany?: reportCreateManyFormdetallerenglonesInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormdetallerenglonesInput | reportUpdateWithWhereUniqueWithoutFormdetallerenglonesInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormdetallerenglonesInput | reportUpdateManyWithWhereWithoutFormdetallerenglonesInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormesfpatrimonioInput = {
    create?: XOR<reportCreateWithoutFormesfpatrimonioInput, reportUncheckedCreateWithoutFormesfpatrimonioInput> | reportCreateWithoutFormesfpatrimonioInput[] | reportUncheckedCreateWithoutFormesfpatrimonioInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormesfpatrimonioInput | reportCreateOrConnectWithoutFormesfpatrimonioInput[]
    createMany?: reportCreateManyFormesfpatrimonioInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormesfpatrimonioInput = {
    create?: XOR<reportCreateWithoutFormesfpatrimonioInput, reportUncheckedCreateWithoutFormesfpatrimonioInput> | reportCreateWithoutFormesfpatrimonioInput[] | reportUncheckedCreateWithoutFormesfpatrimonioInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormesfpatrimonioInput | reportCreateOrConnectWithoutFormesfpatrimonioInput[]
    createMany?: reportCreateManyFormesfpatrimonioInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormesfpatrimonioNestedInput = {
    create?: XOR<reportCreateWithoutFormesfpatrimonioInput, reportUncheckedCreateWithoutFormesfpatrimonioInput> | reportCreateWithoutFormesfpatrimonioInput[] | reportUncheckedCreateWithoutFormesfpatrimonioInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormesfpatrimonioInput | reportCreateOrConnectWithoutFormesfpatrimonioInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormesfpatrimonioInput | reportUpsertWithWhereUniqueWithoutFormesfpatrimonioInput[]
    createMany?: reportCreateManyFormesfpatrimonioInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormesfpatrimonioInput | reportUpdateWithWhereUniqueWithoutFormesfpatrimonioInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormesfpatrimonioInput | reportUpdateManyWithWhereWithoutFormesfpatrimonioInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormesfpatrimonioNestedInput = {
    create?: XOR<reportCreateWithoutFormesfpatrimonioInput, reportUncheckedCreateWithoutFormesfpatrimonioInput> | reportCreateWithoutFormesfpatrimonioInput[] | reportUncheckedCreateWithoutFormesfpatrimonioInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormesfpatrimonioInput | reportCreateOrConnectWithoutFormesfpatrimonioInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormesfpatrimonioInput | reportUpsertWithWhereUniqueWithoutFormesfpatrimonioInput[]
    createMany?: reportCreateManyFormesfpatrimonioInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormesfpatrimonioInput | reportUpdateWithWhereUniqueWithoutFormesfpatrimonioInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormesfpatrimonioInput | reportUpdateManyWithWhereWithoutFormesfpatrimonioInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormimpuestodiferidoInput = {
    create?: XOR<reportCreateWithoutFormimpuestodiferidoInput, reportUncheckedCreateWithoutFormimpuestodiferidoInput> | reportCreateWithoutFormimpuestodiferidoInput[] | reportUncheckedCreateWithoutFormimpuestodiferidoInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormimpuestodiferidoInput | reportCreateOrConnectWithoutFormimpuestodiferidoInput[]
    createMany?: reportCreateManyFormimpuestodiferidoInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormimpuestodiferidoInput = {
    create?: XOR<reportCreateWithoutFormimpuestodiferidoInput, reportUncheckedCreateWithoutFormimpuestodiferidoInput> | reportCreateWithoutFormimpuestodiferidoInput[] | reportUncheckedCreateWithoutFormimpuestodiferidoInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormimpuestodiferidoInput | reportCreateOrConnectWithoutFormimpuestodiferidoInput[]
    createMany?: reportCreateManyFormimpuestodiferidoInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormimpuestodiferidoNestedInput = {
    create?: XOR<reportCreateWithoutFormimpuestodiferidoInput, reportUncheckedCreateWithoutFormimpuestodiferidoInput> | reportCreateWithoutFormimpuestodiferidoInput[] | reportUncheckedCreateWithoutFormimpuestodiferidoInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormimpuestodiferidoInput | reportCreateOrConnectWithoutFormimpuestodiferidoInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormimpuestodiferidoInput | reportUpsertWithWhereUniqueWithoutFormimpuestodiferidoInput[]
    createMany?: reportCreateManyFormimpuestodiferidoInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormimpuestodiferidoInput | reportUpdateWithWhereUniqueWithoutFormimpuestodiferidoInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormimpuestodiferidoInput | reportUpdateManyWithWhereWithoutFormimpuestodiferidoInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormimpuestodiferidoNestedInput = {
    create?: XOR<reportCreateWithoutFormimpuestodiferidoInput, reportUncheckedCreateWithoutFormimpuestodiferidoInput> | reportCreateWithoutFormimpuestodiferidoInput[] | reportUncheckedCreateWithoutFormimpuestodiferidoInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormimpuestodiferidoInput | reportCreateOrConnectWithoutFormimpuestodiferidoInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormimpuestodiferidoInput | reportUpsertWithWhereUniqueWithoutFormimpuestodiferidoInput[]
    createMany?: reportCreateManyFormimpuestodiferidoInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormimpuestodiferidoInput | reportUpdateWithWhereUniqueWithoutFormimpuestodiferidoInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormimpuestodiferidoInput | reportUpdateManyWithWhereWithoutFormimpuestodiferidoInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormingresosfancturacionInput = {
    create?: XOR<reportCreateWithoutFormingresosfancturacionInput, reportUncheckedCreateWithoutFormingresosfancturacionInput> | reportCreateWithoutFormingresosfancturacionInput[] | reportUncheckedCreateWithoutFormingresosfancturacionInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormingresosfancturacionInput | reportCreateOrConnectWithoutFormingresosfancturacionInput[]
    createMany?: reportCreateManyFormingresosfancturacionInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormingresosfancturacionInput = {
    create?: XOR<reportCreateWithoutFormingresosfancturacionInput, reportUncheckedCreateWithoutFormingresosfancturacionInput> | reportCreateWithoutFormingresosfancturacionInput[] | reportUncheckedCreateWithoutFormingresosfancturacionInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormingresosfancturacionInput | reportCreateOrConnectWithoutFormingresosfancturacionInput[]
    createMany?: reportCreateManyFormingresosfancturacionInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormingresosfancturacionNestedInput = {
    create?: XOR<reportCreateWithoutFormingresosfancturacionInput, reportUncheckedCreateWithoutFormingresosfancturacionInput> | reportCreateWithoutFormingresosfancturacionInput[] | reportUncheckedCreateWithoutFormingresosfancturacionInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormingresosfancturacionInput | reportCreateOrConnectWithoutFormingresosfancturacionInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormingresosfancturacionInput | reportUpsertWithWhereUniqueWithoutFormingresosfancturacionInput[]
    createMany?: reportCreateManyFormingresosfancturacionInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormingresosfancturacionInput | reportUpdateWithWhereUniqueWithoutFormingresosfancturacionInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormingresosfancturacionInput | reportUpdateManyWithWhereWithoutFormingresosfancturacionInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormingresosfancturacionNestedInput = {
    create?: XOR<reportCreateWithoutFormingresosfancturacionInput, reportUncheckedCreateWithoutFormingresosfancturacionInput> | reportCreateWithoutFormingresosfancturacionInput[] | reportUncheckedCreateWithoutFormingresosfancturacionInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormingresosfancturacionInput | reportCreateOrConnectWithoutFormingresosfancturacionInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormingresosfancturacionInput | reportUpsertWithWhereUniqueWithoutFormingresosfancturacionInput[]
    createMany?: reportCreateManyFormingresosfancturacionInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormingresosfancturacionInput | reportUpdateWithWhereUniqueWithoutFormingresosfancturacionInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormingresosfancturacionInput | reportUpdateManyWithWhereWithoutFormingresosfancturacionInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormr110Input = {
    create?: XOR<reportCreateWithoutFormr110Input, reportUncheckedCreateWithoutFormr110Input> | reportCreateWithoutFormr110Input[] | reportUncheckedCreateWithoutFormr110Input[]
    connectOrCreate?: reportCreateOrConnectWithoutFormr110Input | reportCreateOrConnectWithoutFormr110Input[]
    createMany?: reportCreateManyFormr110InputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormr110Input = {
    create?: XOR<reportCreateWithoutFormr110Input, reportUncheckedCreateWithoutFormr110Input> | reportCreateWithoutFormr110Input[] | reportUncheckedCreateWithoutFormr110Input[]
    connectOrCreate?: reportCreateOrConnectWithoutFormr110Input | reportCreateOrConnectWithoutFormr110Input[]
    createMany?: reportCreateManyFormr110InputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormr110NestedInput = {
    create?: XOR<reportCreateWithoutFormr110Input, reportUncheckedCreateWithoutFormr110Input> | reportCreateWithoutFormr110Input[] | reportUncheckedCreateWithoutFormr110Input[]
    connectOrCreate?: reportCreateOrConnectWithoutFormr110Input | reportCreateOrConnectWithoutFormr110Input[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormr110Input | reportUpsertWithWhereUniqueWithoutFormr110Input[]
    createMany?: reportCreateManyFormr110InputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormr110Input | reportUpdateWithWhereUniqueWithoutFormr110Input[]
    updateMany?: reportUpdateManyWithWhereWithoutFormr110Input | reportUpdateManyWithWhereWithoutFormr110Input[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormr110NestedInput = {
    create?: XOR<reportCreateWithoutFormr110Input, reportUncheckedCreateWithoutFormr110Input> | reportCreateWithoutFormr110Input[] | reportUncheckedCreateWithoutFormr110Input[]
    connectOrCreate?: reportCreateOrConnectWithoutFormr110Input | reportCreateOrConnectWithoutFormr110Input[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormr110Input | reportUpsertWithWhereUniqueWithoutFormr110Input[]
    createMany?: reportCreateManyFormr110InputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormr110Input | reportUpdateWithWhereUniqueWithoutFormr110Input[]
    updateMany?: reportUpdateManyWithWhereWithoutFormr110Input | reportUpdateManyWithWhereWithoutFormr110Input[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormrentaliquidaInput = {
    create?: XOR<reportCreateWithoutFormrentaliquidaInput, reportUncheckedCreateWithoutFormrentaliquidaInput> | reportCreateWithoutFormrentaliquidaInput[] | reportUncheckedCreateWithoutFormrentaliquidaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormrentaliquidaInput | reportCreateOrConnectWithoutFormrentaliquidaInput[]
    createMany?: reportCreateManyFormrentaliquidaInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormrentaliquidaInput = {
    create?: XOR<reportCreateWithoutFormrentaliquidaInput, reportUncheckedCreateWithoutFormrentaliquidaInput> | reportCreateWithoutFormrentaliquidaInput[] | reportUncheckedCreateWithoutFormrentaliquidaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormrentaliquidaInput | reportCreateOrConnectWithoutFormrentaliquidaInput[]
    createMany?: reportCreateManyFormrentaliquidaInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormrentaliquidaNestedInput = {
    create?: XOR<reportCreateWithoutFormrentaliquidaInput, reportUncheckedCreateWithoutFormrentaliquidaInput> | reportCreateWithoutFormrentaliquidaInput[] | reportUncheckedCreateWithoutFormrentaliquidaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormrentaliquidaInput | reportCreateOrConnectWithoutFormrentaliquidaInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormrentaliquidaInput | reportUpsertWithWhereUniqueWithoutFormrentaliquidaInput[]
    createMany?: reportCreateManyFormrentaliquidaInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormrentaliquidaInput | reportUpdateWithWhereUniqueWithoutFormrentaliquidaInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormrentaliquidaInput | reportUpdateManyWithWhereWithoutFormrentaliquidaInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormrentaliquidaNestedInput = {
    create?: XOR<reportCreateWithoutFormrentaliquidaInput, reportUncheckedCreateWithoutFormrentaliquidaInput> | reportCreateWithoutFormrentaliquidaInput[] | reportUncheckedCreateWithoutFormrentaliquidaInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormrentaliquidaInput | reportCreateOrConnectWithoutFormrentaliquidaInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormrentaliquidaInput | reportUpsertWithWhereUniqueWithoutFormrentaliquidaInput[]
    createMany?: reportCreateManyFormrentaliquidaInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormrentaliquidaInput | reportUpdateWithWhereUniqueWithoutFormrentaliquidaInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormrentaliquidaInput | reportUpdateManyWithWhereWithoutFormrentaliquidaInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutFormresumenesferiInput = {
    create?: XOR<reportCreateWithoutFormresumenesferiInput, reportUncheckedCreateWithoutFormresumenesferiInput> | reportCreateWithoutFormresumenesferiInput[] | reportUncheckedCreateWithoutFormresumenesferiInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormresumenesferiInput | reportCreateOrConnectWithoutFormresumenesferiInput[]
    createMany?: reportCreateManyFormresumenesferiInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutFormresumenesferiInput = {
    create?: XOR<reportCreateWithoutFormresumenesferiInput, reportUncheckedCreateWithoutFormresumenesferiInput> | reportCreateWithoutFormresumenesferiInput[] | reportUncheckedCreateWithoutFormresumenesferiInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormresumenesferiInput | reportCreateOrConnectWithoutFormresumenesferiInput[]
    createMany?: reportCreateManyFormresumenesferiInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutFormresumenesferiNestedInput = {
    create?: XOR<reportCreateWithoutFormresumenesferiInput, reportUncheckedCreateWithoutFormresumenesferiInput> | reportCreateWithoutFormresumenesferiInput[] | reportUncheckedCreateWithoutFormresumenesferiInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormresumenesferiInput | reportCreateOrConnectWithoutFormresumenesferiInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormresumenesferiInput | reportUpsertWithWhereUniqueWithoutFormresumenesferiInput[]
    createMany?: reportCreateManyFormresumenesferiInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormresumenesferiInput | reportUpdateWithWhereUniqueWithoutFormresumenesferiInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormresumenesferiInput | reportUpdateManyWithWhereWithoutFormresumenesferiInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutFormresumenesferiNestedInput = {
    create?: XOR<reportCreateWithoutFormresumenesferiInput, reportUncheckedCreateWithoutFormresumenesferiInput> | reportCreateWithoutFormresumenesferiInput[] | reportUncheckedCreateWithoutFormresumenesferiInput[]
    connectOrCreate?: reportCreateOrConnectWithoutFormresumenesferiInput | reportCreateOrConnectWithoutFormresumenesferiInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutFormresumenesferiInput | reportUpsertWithWhereUniqueWithoutFormresumenesferiInput[]
    createMany?: reportCreateManyFormresumenesferiInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutFormresumenesferiInput | reportUpdateWithWhereUniqueWithoutFormresumenesferiInput[]
    updateMany?: reportUpdateManyWithWhereWithoutFormresumenesferiInput | reportUpdateManyWithWhereWithoutFormresumenesferiInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type formactivosfijosCreateNestedOneWithoutReportInput = {
    create?: XOR<formactivosfijosCreateWithoutReportInput, formactivosfijosUncheckedCreateWithoutReportInput>
    connectOrCreate?: formactivosfijosCreateOrConnectWithoutReportInput
    connect?: formactivosfijosWhereUniqueInput
  }

  export type formcaratulaCreateNestedOneWithoutReportInput = {
    create?: XOR<formcaratulaCreateWithoutReportInput, formcaratulaUncheckedCreateWithoutReportInput>
    connectOrCreate?: formcaratulaCreateOrConnectWithoutReportInput
    connect?: formcaratulaWhereUniqueInput
  }

  export type formdetallerenglonesCreateNestedOneWithoutReportInput = {
    create?: XOR<formdetallerenglonesCreateWithoutReportInput, formdetallerenglonesUncheckedCreateWithoutReportInput>
    connectOrCreate?: formdetallerenglonesCreateOrConnectWithoutReportInput
    connect?: formdetallerenglonesWhereUniqueInput
  }

  export type formesfpatrimonioCreateNestedOneWithoutReportInput = {
    create?: XOR<formesfpatrimonioCreateWithoutReportInput, formesfpatrimonioUncheckedCreateWithoutReportInput>
    connectOrCreate?: formesfpatrimonioCreateOrConnectWithoutReportInput
    connect?: formesfpatrimonioWhereUniqueInput
  }

  export type formimpuestodiferidoCreateNestedOneWithoutReportInput = {
    create?: XOR<formimpuestodiferidoCreateWithoutReportInput, formimpuestodiferidoUncheckedCreateWithoutReportInput>
    connectOrCreate?: formimpuestodiferidoCreateOrConnectWithoutReportInput
    connect?: formimpuestodiferidoWhereUniqueInput
  }

  export type formingresosfancturacionCreateNestedOneWithoutReportInput = {
    create?: XOR<formingresosfancturacionCreateWithoutReportInput, formingresosfancturacionUncheckedCreateWithoutReportInput>
    connectOrCreate?: formingresosfancturacionCreateOrConnectWithoutReportInput
    connect?: formingresosfancturacionWhereUniqueInput
  }

  export type formr110CreateNestedOneWithoutReportInput = {
    create?: XOR<formr110CreateWithoutReportInput, formr110UncheckedCreateWithoutReportInput>
    connectOrCreate?: formr110CreateOrConnectWithoutReportInput
    connect?: formr110WhereUniqueInput
  }

  export type formrentaliquidaCreateNestedOneWithoutReportInput = {
    create?: XOR<formrentaliquidaCreateWithoutReportInput, formrentaliquidaUncheckedCreateWithoutReportInput>
    connectOrCreate?: formrentaliquidaCreateOrConnectWithoutReportInput
    connect?: formrentaliquidaWhereUniqueInput
  }

  export type formresumenesferiCreateNestedOneWithoutReportInput = {
    create?: XOR<formresumenesferiCreateWithoutReportInput, formresumenesferiUncheckedCreateWithoutReportInput>
    connectOrCreate?: formresumenesferiCreateOrConnectWithoutReportInput
    connect?: formresumenesferiWhereUniqueInput
  }

  export type roomCreateNestedOneWithoutReportInput = {
    create?: XOR<roomCreateWithoutReportInput, roomUncheckedCreateWithoutReportInput>
    connectOrCreate?: roomCreateOrConnectWithoutReportInput
    connect?: roomWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutReportInput = {
    create?: XOR<studentCreateWithoutReportInput, studentUncheckedCreateWithoutReportInput>
    connectOrCreate?: studentCreateOrConnectWithoutReportInput
    connect?: studentWhereUniqueInput
  }

  export type formactivosfijosUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formactivosfijosCreateWithoutReportInput, formactivosfijosUncheckedCreateWithoutReportInput>
    connectOrCreate?: formactivosfijosCreateOrConnectWithoutReportInput
    upsert?: formactivosfijosUpsertWithoutReportInput
    connect?: formactivosfijosWhereUniqueInput
    update?: XOR<XOR<formactivosfijosUpdateToOneWithWhereWithoutReportInput, formactivosfijosUpdateWithoutReportInput>, formactivosfijosUncheckedUpdateWithoutReportInput>
  }

  export type formcaratulaUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formcaratulaCreateWithoutReportInput, formcaratulaUncheckedCreateWithoutReportInput>
    connectOrCreate?: formcaratulaCreateOrConnectWithoutReportInput
    upsert?: formcaratulaUpsertWithoutReportInput
    connect?: formcaratulaWhereUniqueInput
    update?: XOR<XOR<formcaratulaUpdateToOneWithWhereWithoutReportInput, formcaratulaUpdateWithoutReportInput>, formcaratulaUncheckedUpdateWithoutReportInput>
  }

  export type formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formdetallerenglonesCreateWithoutReportInput, formdetallerenglonesUncheckedCreateWithoutReportInput>
    connectOrCreate?: formdetallerenglonesCreateOrConnectWithoutReportInput
    upsert?: formdetallerenglonesUpsertWithoutReportInput
    connect?: formdetallerenglonesWhereUniqueInput
    update?: XOR<XOR<formdetallerenglonesUpdateToOneWithWhereWithoutReportInput, formdetallerenglonesUpdateWithoutReportInput>, formdetallerenglonesUncheckedUpdateWithoutReportInput>
  }

  export type formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formesfpatrimonioCreateWithoutReportInput, formesfpatrimonioUncheckedCreateWithoutReportInput>
    connectOrCreate?: formesfpatrimonioCreateOrConnectWithoutReportInput
    upsert?: formesfpatrimonioUpsertWithoutReportInput
    connect?: formesfpatrimonioWhereUniqueInput
    update?: XOR<XOR<formesfpatrimonioUpdateToOneWithWhereWithoutReportInput, formesfpatrimonioUpdateWithoutReportInput>, formesfpatrimonioUncheckedUpdateWithoutReportInput>
  }

  export type formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formimpuestodiferidoCreateWithoutReportInput, formimpuestodiferidoUncheckedCreateWithoutReportInput>
    connectOrCreate?: formimpuestodiferidoCreateOrConnectWithoutReportInput
    upsert?: formimpuestodiferidoUpsertWithoutReportInput
    connect?: formimpuestodiferidoWhereUniqueInput
    update?: XOR<XOR<formimpuestodiferidoUpdateToOneWithWhereWithoutReportInput, formimpuestodiferidoUpdateWithoutReportInput>, formimpuestodiferidoUncheckedUpdateWithoutReportInput>
  }

  export type formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formingresosfancturacionCreateWithoutReportInput, formingresosfancturacionUncheckedCreateWithoutReportInput>
    connectOrCreate?: formingresosfancturacionCreateOrConnectWithoutReportInput
    upsert?: formingresosfancturacionUpsertWithoutReportInput
    connect?: formingresosfancturacionWhereUniqueInput
    update?: XOR<XOR<formingresosfancturacionUpdateToOneWithWhereWithoutReportInput, formingresosfancturacionUpdateWithoutReportInput>, formingresosfancturacionUncheckedUpdateWithoutReportInput>
  }

  export type formr110UpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formr110CreateWithoutReportInput, formr110UncheckedCreateWithoutReportInput>
    connectOrCreate?: formr110CreateOrConnectWithoutReportInput
    upsert?: formr110UpsertWithoutReportInput
    connect?: formr110WhereUniqueInput
    update?: XOR<XOR<formr110UpdateToOneWithWhereWithoutReportInput, formr110UpdateWithoutReportInput>, formr110UncheckedUpdateWithoutReportInput>
  }

  export type formrentaliquidaUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formrentaliquidaCreateWithoutReportInput, formrentaliquidaUncheckedCreateWithoutReportInput>
    connectOrCreate?: formrentaliquidaCreateOrConnectWithoutReportInput
    upsert?: formrentaliquidaUpsertWithoutReportInput
    connect?: formrentaliquidaWhereUniqueInput
    update?: XOR<XOR<formrentaliquidaUpdateToOneWithWhereWithoutReportInput, formrentaliquidaUpdateWithoutReportInput>, formrentaliquidaUncheckedUpdateWithoutReportInput>
  }

  export type formresumenesferiUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<formresumenesferiCreateWithoutReportInput, formresumenesferiUncheckedCreateWithoutReportInput>
    connectOrCreate?: formresumenesferiCreateOrConnectWithoutReportInput
    upsert?: formresumenesferiUpsertWithoutReportInput
    connect?: formresumenesferiWhereUniqueInput
    update?: XOR<XOR<formresumenesferiUpdateToOneWithWhereWithoutReportInput, formresumenesferiUpdateWithoutReportInput>, formresumenesferiUncheckedUpdateWithoutReportInput>
  }

  export type roomUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<roomCreateWithoutReportInput, roomUncheckedCreateWithoutReportInput>
    connectOrCreate?: roomCreateOrConnectWithoutReportInput
    upsert?: roomUpsertWithoutReportInput
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutReportInput, roomUpdateWithoutReportInput>, roomUncheckedUpdateWithoutReportInput>
  }

  export type studentUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<studentCreateWithoutReportInput, studentUncheckedCreateWithoutReportInput>
    connectOrCreate?: studentCreateOrConnectWithoutReportInput
    upsert?: studentUpsertWithoutReportInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutReportInput, studentUpdateWithoutReportInput>, studentUncheckedUpdateWithoutReportInput>
  }

  export type reportCreateNestedManyWithoutRoomInput = {
    create?: XOR<reportCreateWithoutRoomInput, reportUncheckedCreateWithoutRoomInput> | reportCreateWithoutRoomInput[] | reportUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reportCreateOrConnectWithoutRoomInput | reportCreateOrConnectWithoutRoomInput[]
    createMany?: reportCreateManyRoomInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutRoomInput = {
    create?: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
    connectOrCreate?: userCreateOrConnectWithoutRoomInput
    connect?: userWhereUniqueInput
  }

  export type studentCreateNestedManyWithoutRoomInput = {
    create?: XOR<studentCreateWithoutRoomInput, studentUncheckedCreateWithoutRoomInput> | studentCreateWithoutRoomInput[] | studentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: studentCreateOrConnectWithoutRoomInput | studentCreateOrConnectWithoutRoomInput[]
    createMany?: studentCreateManyRoomInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<reportCreateWithoutRoomInput, reportUncheckedCreateWithoutRoomInput> | reportCreateWithoutRoomInput[] | reportUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reportCreateOrConnectWithoutRoomInput | reportCreateOrConnectWithoutRoomInput[]
    createMany?: reportCreateManyRoomInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<studentCreateWithoutRoomInput, studentUncheckedCreateWithoutRoomInput> | studentCreateWithoutRoomInput[] | studentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: studentCreateOrConnectWithoutRoomInput | studentCreateOrConnectWithoutRoomInput[]
    createMany?: studentCreateManyRoomInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumroom_roomStatusFieldUpdateOperationsInput = {
    set?: $Enums.room_roomStatus
  }

  export type reportUpdateManyWithoutRoomNestedInput = {
    create?: XOR<reportCreateWithoutRoomInput, reportUncheckedCreateWithoutRoomInput> | reportCreateWithoutRoomInput[] | reportUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reportCreateOrConnectWithoutRoomInput | reportCreateOrConnectWithoutRoomInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutRoomInput | reportUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: reportCreateManyRoomInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutRoomInput | reportUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: reportUpdateManyWithWhereWithoutRoomInput | reportUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
    connectOrCreate?: userCreateOrConnectWithoutRoomInput
    upsert?: userUpsertWithoutRoomInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRoomInput, userUpdateWithoutRoomInput>, userUncheckedUpdateWithoutRoomInput>
  }

  export type studentUpdateManyWithoutRoomNestedInput = {
    create?: XOR<studentCreateWithoutRoomInput, studentUncheckedCreateWithoutRoomInput> | studentCreateWithoutRoomInput[] | studentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: studentCreateOrConnectWithoutRoomInput | studentCreateOrConnectWithoutRoomInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutRoomInput | studentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: studentCreateManyRoomInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutRoomInput | studentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: studentUpdateManyWithWhereWithoutRoomInput | studentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<reportCreateWithoutRoomInput, reportUncheckedCreateWithoutRoomInput> | reportCreateWithoutRoomInput[] | reportUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reportCreateOrConnectWithoutRoomInput | reportCreateOrConnectWithoutRoomInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutRoomInput | reportUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: reportCreateManyRoomInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutRoomInput | reportUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: reportUpdateManyWithWhereWithoutRoomInput | reportUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<studentCreateWithoutRoomInput, studentUncheckedCreateWithoutRoomInput> | studentCreateWithoutRoomInput[] | studentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: studentCreateOrConnectWithoutRoomInput | studentCreateOrConnectWithoutRoomInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutRoomInput | studentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: studentCreateManyRoomInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutRoomInput | studentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: studentUpdateManyWithWhereWithoutRoomInput | studentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutStudentInput = {
    create?: XOR<reportCreateWithoutStudentInput, reportUncheckedCreateWithoutStudentInput> | reportCreateWithoutStudentInput[] | reportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: reportCreateOrConnectWithoutStudentInput | reportCreateOrConnectWithoutStudentInput[]
    createMany?: reportCreateManyStudentInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type roomCreateNestedOneWithoutStudentInput = {
    create?: XOR<roomCreateWithoutStudentInput, roomUncheckedCreateWithoutStudentInput>
    connectOrCreate?: roomCreateOrConnectWithoutStudentInput
    connect?: roomWhereUniqueInput
  }

  export type reportUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<reportCreateWithoutStudentInput, reportUncheckedCreateWithoutStudentInput> | reportCreateWithoutStudentInput[] | reportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: reportCreateOrConnectWithoutStudentInput | reportCreateOrConnectWithoutStudentInput[]
    createMany?: reportCreateManyStudentInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUpdateManyWithoutStudentNestedInput = {
    create?: XOR<reportCreateWithoutStudentInput, reportUncheckedCreateWithoutStudentInput> | reportCreateWithoutStudentInput[] | reportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: reportCreateOrConnectWithoutStudentInput | reportCreateOrConnectWithoutStudentInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutStudentInput | reportUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: reportCreateManyStudentInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutStudentInput | reportUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: reportUpdateManyWithWhereWithoutStudentInput | reportUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type roomUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<roomCreateWithoutStudentInput, roomUncheckedCreateWithoutStudentInput>
    connectOrCreate?: roomCreateOrConnectWithoutStudentInput
    upsert?: roomUpsertWithoutStudentInput
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutStudentInput, roomUpdateWithoutStudentInput>, roomUncheckedUpdateWithoutStudentInput>
  }

  export type reportUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<reportCreateWithoutStudentInput, reportUncheckedCreateWithoutStudentInput> | reportCreateWithoutStudentInput[] | reportUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: reportCreateOrConnectWithoutStudentInput | reportCreateOrConnectWithoutStudentInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutStudentInput | reportUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: reportCreateManyStudentInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutStudentInput | reportUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: reportUpdateManyWithWhereWithoutStudentInput | reportUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type roomCreateNestedManyWithoutUserInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
  }

  export type roomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
  }

  export type Enumuser_usuRoleFieldUpdateOperationsInput = {
    set?: $Enums.user_usuRole
  }

  export type roomUpdateManyWithoutUserNestedInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    upsert?: roomUpsertWithWhereUniqueWithoutUserInput | roomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    set?: roomWhereUniqueInput | roomWhereUniqueInput[]
    disconnect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    delete?: roomWhereUniqueInput | roomWhereUniqueInput[]
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    update?: roomUpdateWithWhereUniqueWithoutUserInput | roomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: roomUpdateManyWithWhereWithoutUserInput | roomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: roomScalarWhereInput | roomScalarWhereInput[]
  }

  export type roomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    upsert?: roomUpsertWithWhereUniqueWithoutUserInput | roomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    set?: roomWhereUniqueInput | roomWhereUniqueInput[]
    disconnect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    delete?: roomWhereUniqueInput | roomWhereUniqueInput[]
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    update?: roomUpdateWithWhereUniqueWithoutUserInput | roomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: roomUpdateManyWithWhereWithoutUserInput | roomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: roomScalarWhereInput | roomScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumroom_roomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.room_roomStatus | Enumroom_roomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.room_roomStatus[]
    notIn?: $Enums.room_roomStatus[]
    not?: NestedEnumroom_roomStatusFilter<$PrismaModel> | $Enums.room_roomStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumroom_roomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_roomStatus | Enumroom_roomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.room_roomStatus[]
    notIn?: $Enums.room_roomStatus[]
    not?: NestedEnumroom_roomStatusWithAggregatesFilter<$PrismaModel> | $Enums.room_roomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_roomStatusFilter<$PrismaModel>
    _max?: NestedEnumroom_roomStatusFilter<$PrismaModel>
  }

  export type NestedEnumuser_usuRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usuRole | Enumuser_usuRoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_usuRole[]
    notIn?: $Enums.user_usuRole[]
    not?: NestedEnumuser_usuRoleFilter<$PrismaModel> | $Enums.user_usuRole
  }

  export type NestedEnumuser_usuRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usuRole | Enumuser_usuRoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_usuRole[]
    notIn?: $Enums.user_usuRole[]
    not?: NestedEnumuser_usuRoleWithAggregatesFilter<$PrismaModel> | $Enums.user_usuRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_usuRoleFilter<$PrismaModel>
    _max?: NestedEnumuser_usuRoleFilter<$PrismaModel>
  }

  export type reportCreateWithoutFormactivosfijosInput = {
    repID?: string
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormactivosfijosInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormactivosfijosInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormactivosfijosInput, reportUncheckedCreateWithoutFormactivosfijosInput>
  }

  export type reportCreateManyFormactivosfijosInputEnvelope = {
    data: reportCreateManyFormactivosfijosInput | reportCreateManyFormactivosfijosInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormactivosfijosInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormactivosfijosInput, reportUncheckedUpdateWithoutFormactivosfijosInput>
    create: XOR<reportCreateWithoutFormactivosfijosInput, reportUncheckedCreateWithoutFormactivosfijosInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormactivosfijosInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormactivosfijosInput, reportUncheckedUpdateWithoutFormactivosfijosInput>
  }

  export type reportUpdateManyWithWhereWithoutFormactivosfijosInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormactivosfijosInput>
  }

  export type reportScalarWhereInput = {
    AND?: reportScalarWhereInput | reportScalarWhereInput[]
    OR?: reportScalarWhereInput[]
    NOT?: reportScalarWhereInput | reportScalarWhereInput[]
    repID?: StringFilter<"report"> | string
    stuID?: StringFilter<"report"> | string
    roomID?: StringFilter<"report"> | string
    carID?: StringFilter<"report"> | string
    detID?: StringFilter<"report"> | string
    esfID?: StringFilter<"report"> | string
    renID?: StringFilter<"report"> | string
    impID?: StringFilter<"report"> | string
    ingID?: StringFilter<"report"> | string
    actID?: StringFilter<"report"> | string
    resID?: StringFilter<"report"> | string
    r110ID?: StringFilter<"report"> | string
  }

  export type reportCreateWithoutFormcaratulaInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormcaratulaInput = {
    repID?: string
    stuID: string
    roomID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormcaratulaInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormcaratulaInput, reportUncheckedCreateWithoutFormcaratulaInput>
  }

  export type reportCreateManyFormcaratulaInputEnvelope = {
    data: reportCreateManyFormcaratulaInput | reportCreateManyFormcaratulaInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormcaratulaInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormcaratulaInput, reportUncheckedUpdateWithoutFormcaratulaInput>
    create: XOR<reportCreateWithoutFormcaratulaInput, reportUncheckedCreateWithoutFormcaratulaInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormcaratulaInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormcaratulaInput, reportUncheckedUpdateWithoutFormcaratulaInput>
  }

  export type reportUpdateManyWithWhereWithoutFormcaratulaInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormcaratulaInput>
  }

  export type reportCreateWithoutFormdetallerenglonesInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormdetallerenglonesInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormdetallerenglonesInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormdetallerenglonesInput, reportUncheckedCreateWithoutFormdetallerenglonesInput>
  }

  export type reportCreateManyFormdetallerenglonesInputEnvelope = {
    data: reportCreateManyFormdetallerenglonesInput | reportCreateManyFormdetallerenglonesInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormdetallerenglonesInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormdetallerenglonesInput, reportUncheckedUpdateWithoutFormdetallerenglonesInput>
    create: XOR<reportCreateWithoutFormdetallerenglonesInput, reportUncheckedCreateWithoutFormdetallerenglonesInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormdetallerenglonesInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormdetallerenglonesInput, reportUncheckedUpdateWithoutFormdetallerenglonesInput>
  }

  export type reportUpdateManyWithWhereWithoutFormdetallerenglonesInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormdetallerenglonesInput>
  }

  export type reportCreateWithoutFormesfpatrimonioInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormesfpatrimonioInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormesfpatrimonioInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormesfpatrimonioInput, reportUncheckedCreateWithoutFormesfpatrimonioInput>
  }

  export type reportCreateManyFormesfpatrimonioInputEnvelope = {
    data: reportCreateManyFormesfpatrimonioInput | reportCreateManyFormesfpatrimonioInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormesfpatrimonioInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormesfpatrimonioInput, reportUncheckedUpdateWithoutFormesfpatrimonioInput>
    create: XOR<reportCreateWithoutFormesfpatrimonioInput, reportUncheckedCreateWithoutFormesfpatrimonioInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormesfpatrimonioInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormesfpatrimonioInput, reportUncheckedUpdateWithoutFormesfpatrimonioInput>
  }

  export type reportUpdateManyWithWhereWithoutFormesfpatrimonioInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormesfpatrimonioInput>
  }

  export type reportCreateWithoutFormimpuestodiferidoInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormimpuestodiferidoInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormimpuestodiferidoInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormimpuestodiferidoInput, reportUncheckedCreateWithoutFormimpuestodiferidoInput>
  }

  export type reportCreateManyFormimpuestodiferidoInputEnvelope = {
    data: reportCreateManyFormimpuestodiferidoInput | reportCreateManyFormimpuestodiferidoInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormimpuestodiferidoInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormimpuestodiferidoInput, reportUncheckedUpdateWithoutFormimpuestodiferidoInput>
    create: XOR<reportCreateWithoutFormimpuestodiferidoInput, reportUncheckedCreateWithoutFormimpuestodiferidoInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormimpuestodiferidoInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormimpuestodiferidoInput, reportUncheckedUpdateWithoutFormimpuestodiferidoInput>
  }

  export type reportUpdateManyWithWhereWithoutFormimpuestodiferidoInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormimpuestodiferidoInput>
  }

  export type reportCreateWithoutFormingresosfancturacionInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormingresosfancturacionInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormingresosfancturacionInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormingresosfancturacionInput, reportUncheckedCreateWithoutFormingresosfancturacionInput>
  }

  export type reportCreateManyFormingresosfancturacionInputEnvelope = {
    data: reportCreateManyFormingresosfancturacionInput | reportCreateManyFormingresosfancturacionInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormingresosfancturacionInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormingresosfancturacionInput, reportUncheckedUpdateWithoutFormingresosfancturacionInput>
    create: XOR<reportCreateWithoutFormingresosfancturacionInput, reportUncheckedCreateWithoutFormingresosfancturacionInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormingresosfancturacionInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormingresosfancturacionInput, reportUncheckedUpdateWithoutFormingresosfancturacionInput>
  }

  export type reportUpdateManyWithWhereWithoutFormingresosfancturacionInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormingresosfancturacionInput>
  }

  export type reportCreateWithoutFormr110Input = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormr110Input = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
  }

  export type reportCreateOrConnectWithoutFormr110Input = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormr110Input, reportUncheckedCreateWithoutFormr110Input>
  }

  export type reportCreateManyFormr110InputEnvelope = {
    data: reportCreateManyFormr110Input | reportCreateManyFormr110Input[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormr110Input = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormr110Input, reportUncheckedUpdateWithoutFormr110Input>
    create: XOR<reportCreateWithoutFormr110Input, reportUncheckedCreateWithoutFormr110Input>
  }

  export type reportUpdateWithWhereUniqueWithoutFormr110Input = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormr110Input, reportUncheckedUpdateWithoutFormr110Input>
  }

  export type reportUpdateManyWithWhereWithoutFormr110Input = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormr110Input>
  }

  export type reportCreateWithoutFormrentaliquidaInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormrentaliquidaInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormrentaliquidaInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormrentaliquidaInput, reportUncheckedCreateWithoutFormrentaliquidaInput>
  }

  export type reportCreateManyFormrentaliquidaInputEnvelope = {
    data: reportCreateManyFormrentaliquidaInput | reportCreateManyFormrentaliquidaInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormrentaliquidaInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormrentaliquidaInput, reportUncheckedUpdateWithoutFormrentaliquidaInput>
    create: XOR<reportCreateWithoutFormrentaliquidaInput, reportUncheckedCreateWithoutFormrentaliquidaInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormrentaliquidaInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormrentaliquidaInput, reportUncheckedUpdateWithoutFormrentaliquidaInput>
  }

  export type reportUpdateManyWithWhereWithoutFormrentaliquidaInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormrentaliquidaInput>
  }

  export type reportCreateWithoutFormresumenesferiInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutFormresumenesferiInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutFormresumenesferiInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutFormresumenesferiInput, reportUncheckedCreateWithoutFormresumenesferiInput>
  }

  export type reportCreateManyFormresumenesferiInputEnvelope = {
    data: reportCreateManyFormresumenesferiInput | reportCreateManyFormresumenesferiInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutFormresumenesferiInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutFormresumenesferiInput, reportUncheckedUpdateWithoutFormresumenesferiInput>
    create: XOR<reportCreateWithoutFormresumenesferiInput, reportUncheckedCreateWithoutFormresumenesferiInput>
  }

  export type reportUpdateWithWhereUniqueWithoutFormresumenesferiInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutFormresumenesferiInput, reportUncheckedUpdateWithoutFormresumenesferiInput>
  }

  export type reportUpdateManyWithWhereWithoutFormresumenesferiInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutFormresumenesferiInput>
  }

  export type formactivosfijosCreateWithoutReportInput = {
    actID?: string
    actContent: JsonNullValueInput | InputJsonValue
  }

  export type formactivosfijosUncheckedCreateWithoutReportInput = {
    actID?: string
    actContent: JsonNullValueInput | InputJsonValue
  }

  export type formactivosfijosCreateOrConnectWithoutReportInput = {
    where: formactivosfijosWhereUniqueInput
    create: XOR<formactivosfijosCreateWithoutReportInput, formactivosfijosUncheckedCreateWithoutReportInput>
  }

  export type formcaratulaCreateWithoutReportInput = {
    carID?: string
    carContent: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaUncheckedCreateWithoutReportInput = {
    carID?: string
    carContent: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaCreateOrConnectWithoutReportInput = {
    where: formcaratulaWhereUniqueInput
    create: XOR<formcaratulaCreateWithoutReportInput, formcaratulaUncheckedCreateWithoutReportInput>
  }

  export type formdetallerenglonesCreateWithoutReportInput = {
    detID?: string
    detContent: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesUncheckedCreateWithoutReportInput = {
    detID?: string
    detContent: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesCreateOrConnectWithoutReportInput = {
    where: formdetallerenglonesWhereUniqueInput
    create: XOR<formdetallerenglonesCreateWithoutReportInput, formdetallerenglonesUncheckedCreateWithoutReportInput>
  }

  export type formesfpatrimonioCreateWithoutReportInput = {
    esfID?: string
    esfContent: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioUncheckedCreateWithoutReportInput = {
    esfID?: string
    esfContent: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioCreateOrConnectWithoutReportInput = {
    where: formesfpatrimonioWhereUniqueInput
    create: XOR<formesfpatrimonioCreateWithoutReportInput, formesfpatrimonioUncheckedCreateWithoutReportInput>
  }

  export type formimpuestodiferidoCreateWithoutReportInput = {
    impID?: string
    impContent: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoUncheckedCreateWithoutReportInput = {
    impID?: string
    impContent: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoCreateOrConnectWithoutReportInput = {
    where: formimpuestodiferidoWhereUniqueInput
    create: XOR<formimpuestodiferidoCreateWithoutReportInput, formimpuestodiferidoUncheckedCreateWithoutReportInput>
  }

  export type formingresosfancturacionCreateWithoutReportInput = {
    ingID?: string
    ingContent: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionUncheckedCreateWithoutReportInput = {
    ingID?: string
    ingContent: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionCreateOrConnectWithoutReportInput = {
    where: formingresosfancturacionWhereUniqueInput
    create: XOR<formingresosfancturacionCreateWithoutReportInput, formingresosfancturacionUncheckedCreateWithoutReportInput>
  }

  export type formr110CreateWithoutReportInput = {
    r110ID?: string
    r110Content: JsonNullValueInput | InputJsonValue
  }

  export type formr110UncheckedCreateWithoutReportInput = {
    r110ID?: string
    r110Content: JsonNullValueInput | InputJsonValue
  }

  export type formr110CreateOrConnectWithoutReportInput = {
    where: formr110WhereUniqueInput
    create: XOR<formr110CreateWithoutReportInput, formr110UncheckedCreateWithoutReportInput>
  }

  export type formrentaliquidaCreateWithoutReportInput = {
    renID?: string
    renContent: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaUncheckedCreateWithoutReportInput = {
    renID?: string
    renContent: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaCreateOrConnectWithoutReportInput = {
    where: formrentaliquidaWhereUniqueInput
    create: XOR<formrentaliquidaCreateWithoutReportInput, formrentaliquidaUncheckedCreateWithoutReportInput>
  }

  export type formresumenesferiCreateWithoutReportInput = {
    resID?: string
    resContent: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiUncheckedCreateWithoutReportInput = {
    resID?: string
    resContent: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiCreateOrConnectWithoutReportInput = {
    where: formresumenesferiWhereUniqueInput
    create: XOR<formresumenesferiCreateWithoutReportInput, formresumenesferiUncheckedCreateWithoutReportInput>
  }

  export type roomCreateWithoutReportInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    user: userCreateNestedOneWithoutRoomInput
    student?: studentCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutReportInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    usuID: string
    student?: studentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutReportInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutReportInput, roomUncheckedCreateWithoutReportInput>
  }

  export type studentCreateWithoutReportInput = {
    stuID?: string
    stuCedula: string
    room: roomCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutReportInput = {
    stuID?: string
    stuCedula: string
    roomID: string
  }

  export type studentCreateOrConnectWithoutReportInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutReportInput, studentUncheckedCreateWithoutReportInput>
  }

  export type formactivosfijosUpsertWithoutReportInput = {
    update: XOR<formactivosfijosUpdateWithoutReportInput, formactivosfijosUncheckedUpdateWithoutReportInput>
    create: XOR<formactivosfijosCreateWithoutReportInput, formactivosfijosUncheckedCreateWithoutReportInput>
    where?: formactivosfijosWhereInput
  }

  export type formactivosfijosUpdateToOneWithWhereWithoutReportInput = {
    where?: formactivosfijosWhereInput
    data: XOR<formactivosfijosUpdateWithoutReportInput, formactivosfijosUncheckedUpdateWithoutReportInput>
  }

  export type formactivosfijosUpdateWithoutReportInput = {
    actID?: StringFieldUpdateOperationsInput | string
    actContent?: JsonNullValueInput | InputJsonValue
  }

  export type formactivosfijosUncheckedUpdateWithoutReportInput = {
    actID?: StringFieldUpdateOperationsInput | string
    actContent?: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaUpsertWithoutReportInput = {
    update: XOR<formcaratulaUpdateWithoutReportInput, formcaratulaUncheckedUpdateWithoutReportInput>
    create: XOR<formcaratulaCreateWithoutReportInput, formcaratulaUncheckedCreateWithoutReportInput>
    where?: formcaratulaWhereInput
  }

  export type formcaratulaUpdateToOneWithWhereWithoutReportInput = {
    where?: formcaratulaWhereInput
    data: XOR<formcaratulaUpdateWithoutReportInput, formcaratulaUncheckedUpdateWithoutReportInput>
  }

  export type formcaratulaUpdateWithoutReportInput = {
    carID?: StringFieldUpdateOperationsInput | string
    carContent?: JsonNullValueInput | InputJsonValue
  }

  export type formcaratulaUncheckedUpdateWithoutReportInput = {
    carID?: StringFieldUpdateOperationsInput | string
    carContent?: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesUpsertWithoutReportInput = {
    update: XOR<formdetallerenglonesUpdateWithoutReportInput, formdetallerenglonesUncheckedUpdateWithoutReportInput>
    create: XOR<formdetallerenglonesCreateWithoutReportInput, formdetallerenglonesUncheckedCreateWithoutReportInput>
    where?: formdetallerenglonesWhereInput
  }

  export type formdetallerenglonesUpdateToOneWithWhereWithoutReportInput = {
    where?: formdetallerenglonesWhereInput
    data: XOR<formdetallerenglonesUpdateWithoutReportInput, formdetallerenglonesUncheckedUpdateWithoutReportInput>
  }

  export type formdetallerenglonesUpdateWithoutReportInput = {
    detID?: StringFieldUpdateOperationsInput | string
    detContent?: JsonNullValueInput | InputJsonValue
  }

  export type formdetallerenglonesUncheckedUpdateWithoutReportInput = {
    detID?: StringFieldUpdateOperationsInput | string
    detContent?: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioUpsertWithoutReportInput = {
    update: XOR<formesfpatrimonioUpdateWithoutReportInput, formesfpatrimonioUncheckedUpdateWithoutReportInput>
    create: XOR<formesfpatrimonioCreateWithoutReportInput, formesfpatrimonioUncheckedCreateWithoutReportInput>
    where?: formesfpatrimonioWhereInput
  }

  export type formesfpatrimonioUpdateToOneWithWhereWithoutReportInput = {
    where?: formesfpatrimonioWhereInput
    data: XOR<formesfpatrimonioUpdateWithoutReportInput, formesfpatrimonioUncheckedUpdateWithoutReportInput>
  }

  export type formesfpatrimonioUpdateWithoutReportInput = {
    esfID?: StringFieldUpdateOperationsInput | string
    esfContent?: JsonNullValueInput | InputJsonValue
  }

  export type formesfpatrimonioUncheckedUpdateWithoutReportInput = {
    esfID?: StringFieldUpdateOperationsInput | string
    esfContent?: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoUpsertWithoutReportInput = {
    update: XOR<formimpuestodiferidoUpdateWithoutReportInput, formimpuestodiferidoUncheckedUpdateWithoutReportInput>
    create: XOR<formimpuestodiferidoCreateWithoutReportInput, formimpuestodiferidoUncheckedCreateWithoutReportInput>
    where?: formimpuestodiferidoWhereInput
  }

  export type formimpuestodiferidoUpdateToOneWithWhereWithoutReportInput = {
    where?: formimpuestodiferidoWhereInput
    data: XOR<formimpuestodiferidoUpdateWithoutReportInput, formimpuestodiferidoUncheckedUpdateWithoutReportInput>
  }

  export type formimpuestodiferidoUpdateWithoutReportInput = {
    impID?: StringFieldUpdateOperationsInput | string
    impContent?: JsonNullValueInput | InputJsonValue
  }

  export type formimpuestodiferidoUncheckedUpdateWithoutReportInput = {
    impID?: StringFieldUpdateOperationsInput | string
    impContent?: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionUpsertWithoutReportInput = {
    update: XOR<formingresosfancturacionUpdateWithoutReportInput, formingresosfancturacionUncheckedUpdateWithoutReportInput>
    create: XOR<formingresosfancturacionCreateWithoutReportInput, formingresosfancturacionUncheckedCreateWithoutReportInput>
    where?: formingresosfancturacionWhereInput
  }

  export type formingresosfancturacionUpdateToOneWithWhereWithoutReportInput = {
    where?: formingresosfancturacionWhereInput
    data: XOR<formingresosfancturacionUpdateWithoutReportInput, formingresosfancturacionUncheckedUpdateWithoutReportInput>
  }

  export type formingresosfancturacionUpdateWithoutReportInput = {
    ingID?: StringFieldUpdateOperationsInput | string
    ingContent?: JsonNullValueInput | InputJsonValue
  }

  export type formingresosfancturacionUncheckedUpdateWithoutReportInput = {
    ingID?: StringFieldUpdateOperationsInput | string
    ingContent?: JsonNullValueInput | InputJsonValue
  }

  export type formr110UpsertWithoutReportInput = {
    update: XOR<formr110UpdateWithoutReportInput, formr110UncheckedUpdateWithoutReportInput>
    create: XOR<formr110CreateWithoutReportInput, formr110UncheckedCreateWithoutReportInput>
    where?: formr110WhereInput
  }

  export type formr110UpdateToOneWithWhereWithoutReportInput = {
    where?: formr110WhereInput
    data: XOR<formr110UpdateWithoutReportInput, formr110UncheckedUpdateWithoutReportInput>
  }

  export type formr110UpdateWithoutReportInput = {
    r110ID?: StringFieldUpdateOperationsInput | string
    r110Content?: JsonNullValueInput | InputJsonValue
  }

  export type formr110UncheckedUpdateWithoutReportInput = {
    r110ID?: StringFieldUpdateOperationsInput | string
    r110Content?: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaUpsertWithoutReportInput = {
    update: XOR<formrentaliquidaUpdateWithoutReportInput, formrentaliquidaUncheckedUpdateWithoutReportInput>
    create: XOR<formrentaliquidaCreateWithoutReportInput, formrentaliquidaUncheckedCreateWithoutReportInput>
    where?: formrentaliquidaWhereInput
  }

  export type formrentaliquidaUpdateToOneWithWhereWithoutReportInput = {
    where?: formrentaliquidaWhereInput
    data: XOR<formrentaliquidaUpdateWithoutReportInput, formrentaliquidaUncheckedUpdateWithoutReportInput>
  }

  export type formrentaliquidaUpdateWithoutReportInput = {
    renID?: StringFieldUpdateOperationsInput | string
    renContent?: JsonNullValueInput | InputJsonValue
  }

  export type formrentaliquidaUncheckedUpdateWithoutReportInput = {
    renID?: StringFieldUpdateOperationsInput | string
    renContent?: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiUpsertWithoutReportInput = {
    update: XOR<formresumenesferiUpdateWithoutReportInput, formresumenesferiUncheckedUpdateWithoutReportInput>
    create: XOR<formresumenesferiCreateWithoutReportInput, formresumenesferiUncheckedCreateWithoutReportInput>
    where?: formresumenesferiWhereInput
  }

  export type formresumenesferiUpdateToOneWithWhereWithoutReportInput = {
    where?: formresumenesferiWhereInput
    data: XOR<formresumenesferiUpdateWithoutReportInput, formresumenesferiUncheckedUpdateWithoutReportInput>
  }

  export type formresumenesferiUpdateWithoutReportInput = {
    resID?: StringFieldUpdateOperationsInput | string
    resContent?: JsonNullValueInput | InputJsonValue
  }

  export type formresumenesferiUncheckedUpdateWithoutReportInput = {
    resID?: StringFieldUpdateOperationsInput | string
    resContent?: JsonNullValueInput | InputJsonValue
  }

  export type roomUpsertWithoutReportInput = {
    update: XOR<roomUpdateWithoutReportInput, roomUncheckedUpdateWithoutReportInput>
    create: XOR<roomCreateWithoutReportInput, roomUncheckedCreateWithoutReportInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutReportInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutReportInput, roomUncheckedUpdateWithoutReportInput>
  }

  export type roomUpdateWithoutReportInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    user?: userUpdateOneRequiredWithoutRoomNestedInput
    student?: studentUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutReportInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    usuID?: StringFieldUpdateOperationsInput | string
    student?: studentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type studentUpsertWithoutReportInput = {
    update: XOR<studentUpdateWithoutReportInput, studentUncheckedUpdateWithoutReportInput>
    create: XOR<studentCreateWithoutReportInput, studentUncheckedCreateWithoutReportInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutReportInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutReportInput, studentUncheckedUpdateWithoutReportInput>
  }

  export type studentUpdateWithoutReportInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    room?: roomUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutReportInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateWithoutRoomInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    student: studentCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutRoomInput = {
    repID?: string
    stuID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutRoomInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutRoomInput, reportUncheckedCreateWithoutRoomInput>
  }

  export type reportCreateManyRoomInputEnvelope = {
    data: reportCreateManyRoomInput | reportCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutRoomInput = {
    usuID?: string
    usuName: string
    usuEmail: string
    usuPassword: string
    usuRole: $Enums.user_usuRole
  }

  export type userUncheckedCreateWithoutRoomInput = {
    usuID?: string
    usuName: string
    usuEmail: string
    usuPassword: string
    usuRole: $Enums.user_usuRole
  }

  export type userCreateOrConnectWithoutRoomInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
  }

  export type studentCreateWithoutRoomInput = {
    stuID?: string
    stuCedula: string
    report?: reportCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutRoomInput = {
    stuID?: string
    stuCedula: string
    report?: reportUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutRoomInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutRoomInput, studentUncheckedCreateWithoutRoomInput>
  }

  export type studentCreateManyRoomInputEnvelope = {
    data: studentCreateManyRoomInput | studentCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutRoomInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutRoomInput, reportUncheckedUpdateWithoutRoomInput>
    create: XOR<reportCreateWithoutRoomInput, reportUncheckedCreateWithoutRoomInput>
  }

  export type reportUpdateWithWhereUniqueWithoutRoomInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutRoomInput, reportUncheckedUpdateWithoutRoomInput>
  }

  export type reportUpdateManyWithWhereWithoutRoomInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutRoomInput>
  }

  export type userUpsertWithoutRoomInput = {
    update: XOR<userUpdateWithoutRoomInput, userUncheckedUpdateWithoutRoomInput>
    create: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRoomInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRoomInput, userUncheckedUpdateWithoutRoomInput>
  }

  export type userUpdateWithoutRoomInput = {
    usuID?: StringFieldUpdateOperationsInput | string
    usuName?: StringFieldUpdateOperationsInput | string
    usuEmail?: StringFieldUpdateOperationsInput | string
    usuPassword?: StringFieldUpdateOperationsInput | string
    usuRole?: Enumuser_usuRoleFieldUpdateOperationsInput | $Enums.user_usuRole
  }

  export type userUncheckedUpdateWithoutRoomInput = {
    usuID?: StringFieldUpdateOperationsInput | string
    usuName?: StringFieldUpdateOperationsInput | string
    usuEmail?: StringFieldUpdateOperationsInput | string
    usuPassword?: StringFieldUpdateOperationsInput | string
    usuRole?: Enumuser_usuRoleFieldUpdateOperationsInput | $Enums.user_usuRole
  }

  export type studentUpsertWithWhereUniqueWithoutRoomInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutRoomInput, studentUncheckedUpdateWithoutRoomInput>
    create: XOR<studentCreateWithoutRoomInput, studentUncheckedCreateWithoutRoomInput>
  }

  export type studentUpdateWithWhereUniqueWithoutRoomInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutRoomInput, studentUncheckedUpdateWithoutRoomInput>
  }

  export type studentUpdateManyWithWhereWithoutRoomInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutRoomInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    stuID?: StringFilter<"student"> | string
    stuCedula?: StringFilter<"student"> | string
    roomID?: StringFilter<"student"> | string
  }

  export type reportCreateWithoutStudentInput = {
    repID?: string
    formactivosfijos: formactivosfijosCreateNestedOneWithoutReportInput
    formcaratula: formcaratulaCreateNestedOneWithoutReportInput
    formdetallerenglones: formdetallerenglonesCreateNestedOneWithoutReportInput
    formesfpatrimonio: formesfpatrimonioCreateNestedOneWithoutReportInput
    formimpuestodiferido: formimpuestodiferidoCreateNestedOneWithoutReportInput
    formingresosfancturacion: formingresosfancturacionCreateNestedOneWithoutReportInput
    formr110: formr110CreateNestedOneWithoutReportInput
    formrentaliquida: formrentaliquidaCreateNestedOneWithoutReportInput
    formresumenesferi: formresumenesferiCreateNestedOneWithoutReportInput
    room: roomCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutStudentInput = {
    repID?: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportCreateOrConnectWithoutStudentInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutStudentInput, reportUncheckedCreateWithoutStudentInput>
  }

  export type reportCreateManyStudentInputEnvelope = {
    data: reportCreateManyStudentInput | reportCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type roomCreateWithoutStudentInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutRoomInput
    user: userCreateNestedOneWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutStudentInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    usuID: string
    report?: reportUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutStudentInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutStudentInput, roomUncheckedCreateWithoutStudentInput>
  }

  export type reportUpsertWithWhereUniqueWithoutStudentInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutStudentInput, reportUncheckedUpdateWithoutStudentInput>
    create: XOR<reportCreateWithoutStudentInput, reportUncheckedCreateWithoutStudentInput>
  }

  export type reportUpdateWithWhereUniqueWithoutStudentInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutStudentInput, reportUncheckedUpdateWithoutStudentInput>
  }

  export type reportUpdateManyWithWhereWithoutStudentInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutStudentInput>
  }

  export type roomUpsertWithoutStudentInput = {
    update: XOR<roomUpdateWithoutStudentInput, roomUncheckedUpdateWithoutStudentInput>
    create: XOR<roomCreateWithoutStudentInput, roomUncheckedCreateWithoutStudentInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutStudentInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutStudentInput, roomUncheckedUpdateWithoutStudentInput>
  }

  export type roomUpdateWithoutStudentInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutRoomNestedInput
    user?: userUpdateOneRequiredWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutStudentInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    usuID?: StringFieldUpdateOperationsInput | string
    report?: reportUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateWithoutUserInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    report?: reportCreateNestedManyWithoutRoomInput
    student?: studentCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutUserInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedCreateNestedManyWithoutRoomInput
    student?: studentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutUserInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput>
  }

  export type roomCreateManyUserInputEnvelope = {
    data: roomCreateManyUserInput | roomCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type roomUpsertWithWhereUniqueWithoutUserInput = {
    where: roomWhereUniqueInput
    update: XOR<roomUpdateWithoutUserInput, roomUncheckedUpdateWithoutUserInput>
    create: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput>
  }

  export type roomUpdateWithWhereUniqueWithoutUserInput = {
    where: roomWhereUniqueInput
    data: XOR<roomUpdateWithoutUserInput, roomUncheckedUpdateWithoutUserInput>
  }

  export type roomUpdateManyWithWhereWithoutUserInput = {
    where: roomScalarWhereInput
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyWithoutUserInput>
  }

  export type roomScalarWhereInput = {
    AND?: roomScalarWhereInput | roomScalarWhereInput[]
    OR?: roomScalarWhereInput[]
    NOT?: roomScalarWhereInput | roomScalarWhereInput[]
    roomID?: StringFilter<"room"> | string
    roomName?: StringFilter<"room"> | string
    roomPassword?: StringFilter<"room"> | string
    roomDate?: DateTimeFilter<"room"> | Date | string
    roomStatus?: Enumroom_roomStatusFilter<"room"> | $Enums.room_roomStatus
    roomAnswer?: JsonFilter<"room">
    usuID?: StringFilter<"room"> | string
  }

  export type reportCreateManyFormactivosfijosInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormactivosfijosInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormactivosfijosInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormactivosfijosInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormcaratulaInput = {
    repID?: string
    stuID: string
    roomID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormcaratulaInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormcaratulaInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormcaratulaInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormdetallerenglonesInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormdetallerenglonesInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormdetallerenglonesInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormdetallerenglonesInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormesfpatrimonioInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormesfpatrimonioInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormesfpatrimonioInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormesfpatrimonioInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormimpuestodiferidoInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormimpuestodiferidoInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormimpuestodiferidoInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormimpuestodiferidoInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormingresosfancturacionInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormingresosfancturacionInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormingresosfancturacionInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormingresosfancturacionInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormr110Input = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
  }

  export type reportUpdateWithoutFormr110Input = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormr110Input = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormr110Input = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormrentaliquidaInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormrentaliquidaInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormrentaliquidaInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormrentaliquidaInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyFormresumenesferiInput = {
    repID?: string
    stuID: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    r110ID: string
  }

  export type reportUpdateWithoutFormresumenesferiInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutFormresumenesferiInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutFormresumenesferiInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyRoomInput = {
    repID?: string
    stuID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type studentCreateManyRoomInput = {
    stuID?: string
    stuCedula: string
  }

  export type reportUpdateWithoutRoomInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    student?: studentUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutRoomInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutRoomInput = {
    repID?: StringFieldUpdateOperationsInput | string
    stuID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type studentUpdateWithoutRoomInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    report?: reportUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutRoomInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
    report?: reportUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutRoomInput = {
    stuID?: StringFieldUpdateOperationsInput | string
    stuCedula?: StringFieldUpdateOperationsInput | string
  }

  export type reportCreateManyStudentInput = {
    repID?: string
    roomID: string
    carID: string
    detID: string
    esfID: string
    renID: string
    impID: string
    ingID: string
    actID: string
    resID: string
    r110ID: string
  }

  export type reportUpdateWithoutStudentInput = {
    repID?: StringFieldUpdateOperationsInput | string
    formactivosfijos?: formactivosfijosUpdateOneRequiredWithoutReportNestedInput
    formcaratula?: formcaratulaUpdateOneRequiredWithoutReportNestedInput
    formdetallerenglones?: formdetallerenglonesUpdateOneRequiredWithoutReportNestedInput
    formesfpatrimonio?: formesfpatrimonioUpdateOneRequiredWithoutReportNestedInput
    formimpuestodiferido?: formimpuestodiferidoUpdateOneRequiredWithoutReportNestedInput
    formingresosfancturacion?: formingresosfancturacionUpdateOneRequiredWithoutReportNestedInput
    formr110?: formr110UpdateOneRequiredWithoutReportNestedInput
    formrentaliquida?: formrentaliquidaUpdateOneRequiredWithoutReportNestedInput
    formresumenesferi?: formresumenesferiUpdateOneRequiredWithoutReportNestedInput
    room?: roomUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutStudentInput = {
    repID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyWithoutStudentInput = {
    repID?: StringFieldUpdateOperationsInput | string
    roomID?: StringFieldUpdateOperationsInput | string
    carID?: StringFieldUpdateOperationsInput | string
    detID?: StringFieldUpdateOperationsInput | string
    esfID?: StringFieldUpdateOperationsInput | string
    renID?: StringFieldUpdateOperationsInput | string
    impID?: StringFieldUpdateOperationsInput | string
    ingID?: StringFieldUpdateOperationsInput | string
    actID?: StringFieldUpdateOperationsInput | string
    resID?: StringFieldUpdateOperationsInput | string
    r110ID?: StringFieldUpdateOperationsInput | string
  }

  export type roomCreateManyUserInput = {
    roomID?: string
    roomName: string
    roomPassword: string
    roomDate: Date | string
    roomStatus: $Enums.room_roomStatus
    roomAnswer: JsonNullValueInput | InputJsonValue
  }

  export type roomUpdateWithoutUserInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    report?: reportUpdateManyWithoutRoomNestedInput
    student?: studentUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutUserInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
    report?: reportUncheckedUpdateManyWithoutRoomNestedInput
    student?: studentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateManyWithoutUserInput = {
    roomID?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    roomPassword?: StringFieldUpdateOperationsInput | string
    roomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    roomStatus?: Enumroom_roomStatusFieldUpdateOperationsInput | $Enums.room_roomStatus
    roomAnswer?: JsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}