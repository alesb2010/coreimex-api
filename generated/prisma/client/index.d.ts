
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Seller
 * 
 */
export type Seller = $Result.DefaultSelection<Prisma.$SellerPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model ContractProduct
 * 
 */
export type ContractProduct = $Result.DefaultSelection<Prisma.$ContractProductPayload>
/**
 * Model BrokerageInvoice
 * 
 */
export type BrokerageInvoice = $Result.DefaultSelection<Prisma.$BrokerageInvoicePayload>
/**
 * Model ArbitrationRule
 * 
 */
export type ArbitrationRule = $Result.DefaultSelection<Prisma.$ArbitrationRulePayload>
/**
 * Model SpecialCondition
 * 
 */
export type SpecialCondition = $Result.DefaultSelection<Prisma.$SpecialConditionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seller`: Exposes CRUD operations for the **Seller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.seller.findMany()
    * ```
    */
  get seller(): Prisma.SellerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractProduct`: Exposes CRUD operations for the **ContractProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractProducts
    * const contractProducts = await prisma.contractProduct.findMany()
    * ```
    */
  get contractProduct(): Prisma.ContractProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brokerageInvoice`: Exposes CRUD operations for the **BrokerageInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrokerageInvoices
    * const brokerageInvoices = await prisma.brokerageInvoice.findMany()
    * ```
    */
  get brokerageInvoice(): Prisma.BrokerageInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arbitrationRule`: Exposes CRUD operations for the **ArbitrationRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArbitrationRules
    * const arbitrationRules = await prisma.arbitrationRule.findMany()
    * ```
    */
  get arbitrationRule(): Prisma.ArbitrationRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialCondition`: Exposes CRUD operations for the **SpecialCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialConditions
    * const specialConditions = await prisma.specialCondition.findMany()
    * ```
    */
  get specialCondition(): Prisma.SpecialConditionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Product: 'Product',
    Seller: 'Seller',
    Customer: 'Customer',
    Contract: 'Contract',
    ContractProduct: 'ContractProduct',
    BrokerageInvoice: 'BrokerageInvoice',
    ArbitrationRule: 'ArbitrationRule',
    SpecialCondition: 'SpecialCondition'
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
      modelProps: "user" | "product" | "seller" | "customer" | "contract" | "contractProduct" | "brokerageInvoice" | "arbitrationRule" | "specialCondition"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Seller: {
        payload: Prisma.$SellerPayload<ExtArgs>
        fields: Prisma.SellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findFirst: {
            args: Prisma.SellerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findMany: {
            args: Prisma.SellerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          create: {
            args: Prisma.SellerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          createMany: {
            args: Prisma.SellerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          delete: {
            args: Prisma.SellerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          update: {
            args: Prisma.SellerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          deleteMany: {
            args: Prisma.SellerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          upsert: {
            args: Prisma.SellerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          aggregate: {
            args: Prisma.SellerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeller>
          }
          groupBy: {
            args: Prisma.SellerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerCountArgs<ExtArgs>
            result: $Utils.Optional<SellerCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      ContractProduct: {
        payload: Prisma.$ContractProductPayload<ExtArgs>
        fields: Prisma.ContractProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>
          }
          findFirst: {
            args: Prisma.ContractProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>
          }
          findMany: {
            args: Prisma.ContractProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>[]
          }
          create: {
            args: Prisma.ContractProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>
          }
          createMany: {
            args: Prisma.ContractProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>[]
          }
          delete: {
            args: Prisma.ContractProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>
          }
          update: {
            args: Prisma.ContractProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>
          }
          deleteMany: {
            args: Prisma.ContractProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>[]
          }
          upsert: {
            args: Prisma.ContractProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProductPayload>
          }
          aggregate: {
            args: Prisma.ContractProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractProduct>
          }
          groupBy: {
            args: Prisma.ContractProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractProductCountArgs<ExtArgs>
            result: $Utils.Optional<ContractProductCountAggregateOutputType> | number
          }
        }
      }
      BrokerageInvoice: {
        payload: Prisma.$BrokerageInvoicePayload<ExtArgs>
        fields: Prisma.BrokerageInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrokerageInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrokerageInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>
          }
          findFirst: {
            args: Prisma.BrokerageInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrokerageInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>
          }
          findMany: {
            args: Prisma.BrokerageInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>[]
          }
          create: {
            args: Prisma.BrokerageInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>
          }
          createMany: {
            args: Prisma.BrokerageInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrokerageInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>[]
          }
          delete: {
            args: Prisma.BrokerageInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>
          }
          update: {
            args: Prisma.BrokerageInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>
          }
          deleteMany: {
            args: Prisma.BrokerageInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrokerageInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrokerageInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>[]
          }
          upsert: {
            args: Prisma.BrokerageInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerageInvoicePayload>
          }
          aggregate: {
            args: Prisma.BrokerageInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrokerageInvoice>
          }
          groupBy: {
            args: Prisma.BrokerageInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrokerageInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrokerageInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<BrokerageInvoiceCountAggregateOutputType> | number
          }
        }
      }
      ArbitrationRule: {
        payload: Prisma.$ArbitrationRulePayload<ExtArgs>
        fields: Prisma.ArbitrationRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArbitrationRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArbitrationRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>
          }
          findFirst: {
            args: Prisma.ArbitrationRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArbitrationRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>
          }
          findMany: {
            args: Prisma.ArbitrationRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>[]
          }
          create: {
            args: Prisma.ArbitrationRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>
          }
          createMany: {
            args: Prisma.ArbitrationRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArbitrationRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>[]
          }
          delete: {
            args: Prisma.ArbitrationRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>
          }
          update: {
            args: Prisma.ArbitrationRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>
          }
          deleteMany: {
            args: Prisma.ArbitrationRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArbitrationRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArbitrationRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>[]
          }
          upsert: {
            args: Prisma.ArbitrationRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrationRulePayload>
          }
          aggregate: {
            args: Prisma.ArbitrationRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArbitrationRule>
          }
          groupBy: {
            args: Prisma.ArbitrationRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArbitrationRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArbitrationRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ArbitrationRuleCountAggregateOutputType> | number
          }
        }
      }
      SpecialCondition: {
        payload: Prisma.$SpecialConditionPayload<ExtArgs>
        fields: Prisma.SpecialConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>
          }
          findFirst: {
            args: Prisma.SpecialConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>
          }
          findMany: {
            args: Prisma.SpecialConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>[]
          }
          create: {
            args: Prisma.SpecialConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>
          }
          createMany: {
            args: Prisma.SpecialConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>[]
          }
          delete: {
            args: Prisma.SpecialConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>
          }
          update: {
            args: Prisma.SpecialConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>
          }
          deleteMany: {
            args: Prisma.SpecialConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>[]
          }
          upsert: {
            args: Prisma.SpecialConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialConditionPayload>
          }
          aggregate: {
            args: Prisma.SpecialConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialCondition>
          }
          groupBy: {
            args: Prisma.SpecialConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialConditionCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialConditionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    product?: ProductOmit
    seller?: SellerOmit
    customer?: CustomerOmit
    contract?: ContractOmit
    contractProduct?: ContractProductOmit
    brokerageInvoice?: BrokerageInvoiceOmit
    arbitrationRule?: ArbitrationRuleOmit
    specialCondition?: SpecialConditionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    contracts: number
    contractProducts: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | ProductCountOutputTypeCountContractsArgs
    contractProducts?: boolean | ProductCountOutputTypeCountContractProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountContractProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractProductWhereInput
  }


  /**
   * Count Type SellerCountOutputType
   */

  export type SellerCountOutputType = {
    products: number
    contracts: number
  }

  export type SellerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SellerCountOutputTypeCountProductsArgs
    contracts?: boolean | SellerCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerCountOutputType
     */
    select?: SellerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * SellerCountOutputType without action
   */
  export type SellerCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    contracts: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | CustomerCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    products: number
    contractProducts: number
    arbitration_rules: number
    special_conditions: number
    brokerageInvoices: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ContractCountOutputTypeCountProductsArgs
    contractProducts?: boolean | ContractCountOutputTypeCountContractProductsArgs
    arbitration_rules?: boolean | ContractCountOutputTypeCountArbitration_rulesArgs
    special_conditions?: boolean | ContractCountOutputTypeCountSpecial_conditionsArgs
    brokerageInvoices?: boolean | ContractCountOutputTypeCountBrokerageInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountContractProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractProductWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountArbitration_rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitrationRuleWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountSpecial_conditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialConditionWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountBrokerageInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerageInvoiceWhereInput
  }


  /**
   * Count Type ArbitrationRuleCountOutputType
   */

  export type ArbitrationRuleCountOutputType = {
    contracts: number
  }

  export type ArbitrationRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | ArbitrationRuleCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * ArbitrationRuleCountOutputType without action
   */
  export type ArbitrationRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRuleCountOutputType
     */
    select?: ArbitrationRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArbitrationRuleCountOutputType without action
   */
  export type ArbitrationRuleCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type SpecialConditionCountOutputType
   */

  export type SpecialConditionCountOutputType = {
    contracts: number
  }

  export type SpecialConditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | SpecialConditionCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * SpecialConditionCountOutputType without action
   */
  export type SpecialConditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialConditionCountOutputType
     */
    select?: SpecialConditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialConditionCountOutputType without action
   */
  export type SpecialConditionCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    role: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      role: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price_comercial: number | null
    price_local: number | null
    comission: number | null
    quantity_per_pack: number | null
    quantity_per_container: number | null
    sellersId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price_comercial: number | null
    price_local: number | null
    comission: number | null
    quantity_per_pack: number | null
    quantity_per_container: number | null
    sellersId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    comercial_name: string | null
    category: string | null
    origin_country: string | null
    price_comercial: number | null
    price_local: number | null
    currency: string | null
    comission: number | null
    regulator_organ_number: string | null
    pack_type: string | null
    quantity_per_pack: number | null
    quantity_per_container: number | null
    container_type: string | null
    country_from: string | null
    supply_origin_country: string | null
    port_origin: string | null
    port_destination: string | null
    record_owner: string | null
    observation: string | null
    sellersId: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    comercial_name: string | null
    category: string | null
    origin_country: string | null
    price_comercial: number | null
    price_local: number | null
    currency: string | null
    comission: number | null
    regulator_organ_number: string | null
    pack_type: string | null
    quantity_per_pack: number | null
    quantity_per_container: number | null
    container_type: string | null
    country_from: string | null
    supply_origin_country: string | null
    port_origin: string | null
    port_destination: string | null
    record_owner: string | null
    observation: string | null
    sellersId: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    comercial_name: number
    category: number
    origin_country: number
    price_comercial: number
    price_local: number
    currency: number
    comission: number
    incoterm: number
    regulator_organ_number: number
    sanity_rules: number
    pack_type: number
    quantity_per_pack: number
    quantity_per_container: number
    container_type: number
    country_from: number
    supply_origin_country: number
    port_origin: number
    port_destination: number
    documents_required: number
    record_owner: number
    observation: number
    attached_files: number
    sellersId: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price_comercial?: true
    price_local?: true
    comission?: true
    quantity_per_pack?: true
    quantity_per_container?: true
    sellersId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price_comercial?: true
    price_local?: true
    comission?: true
    quantity_per_pack?: true
    quantity_per_container?: true
    sellersId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    comercial_name?: true
    category?: true
    origin_country?: true
    price_comercial?: true
    price_local?: true
    currency?: true
    comission?: true
    regulator_organ_number?: true
    pack_type?: true
    quantity_per_pack?: true
    quantity_per_container?: true
    container_type?: true
    country_from?: true
    supply_origin_country?: true
    port_origin?: true
    port_destination?: true
    record_owner?: true
    observation?: true
    sellersId?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    comercial_name?: true
    category?: true
    origin_country?: true
    price_comercial?: true
    price_local?: true
    currency?: true
    comission?: true
    regulator_organ_number?: true
    pack_type?: true
    quantity_per_pack?: true
    quantity_per_container?: true
    container_type?: true
    country_from?: true
    supply_origin_country?: true
    port_origin?: true
    port_destination?: true
    record_owner?: true
    observation?: true
    sellersId?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    comercial_name?: true
    category?: true
    origin_country?: true
    price_comercial?: true
    price_local?: true
    currency?: true
    comission?: true
    incoterm?: true
    regulator_organ_number?: true
    sanity_rules?: true
    pack_type?: true
    quantity_per_pack?: true
    quantity_per_container?: true
    container_type?: true
    country_from?: true
    supply_origin_country?: true
    port_origin?: true
    port_destination?: true
    documents_required?: true
    record_owner?: true
    observation?: true
    attached_files?: true
    sellersId?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm: string[]
    regulator_organ_number: string
    sanity_rules: string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required: string[]
    record_owner: string
    observation: string
    attached_files: string[]
    sellersId: number
    createdAt: Date
    active: boolean
    status: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    comercial_name?: boolean
    category?: boolean
    origin_country?: boolean
    price_comercial?: boolean
    price_local?: boolean
    currency?: boolean
    comission?: boolean
    incoterm?: boolean
    regulator_organ_number?: boolean
    sanity_rules?: boolean
    pack_type?: boolean
    quantity_per_pack?: boolean
    quantity_per_container?: boolean
    container_type?: boolean
    country_from?: boolean
    supply_origin_country?: boolean
    port_origin?: boolean
    port_destination?: boolean
    documents_required?: boolean
    record_owner?: boolean
    observation?: boolean
    attached_files?: boolean
    sellersId?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    sellers?: boolean | SellerDefaultArgs<ExtArgs>
    contracts?: boolean | Product$contractsArgs<ExtArgs>
    contractProducts?: boolean | Product$contractProductsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    comercial_name?: boolean
    category?: boolean
    origin_country?: boolean
    price_comercial?: boolean
    price_local?: boolean
    currency?: boolean
    comission?: boolean
    incoterm?: boolean
    regulator_organ_number?: boolean
    sanity_rules?: boolean
    pack_type?: boolean
    quantity_per_pack?: boolean
    quantity_per_container?: boolean
    container_type?: boolean
    country_from?: boolean
    supply_origin_country?: boolean
    port_origin?: boolean
    port_destination?: boolean
    documents_required?: boolean
    record_owner?: boolean
    observation?: boolean
    attached_files?: boolean
    sellersId?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    sellers?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    comercial_name?: boolean
    category?: boolean
    origin_country?: boolean
    price_comercial?: boolean
    price_local?: boolean
    currency?: boolean
    comission?: boolean
    incoterm?: boolean
    regulator_organ_number?: boolean
    sanity_rules?: boolean
    pack_type?: boolean
    quantity_per_pack?: boolean
    quantity_per_container?: boolean
    container_type?: boolean
    country_from?: boolean
    supply_origin_country?: boolean
    port_origin?: boolean
    port_destination?: boolean
    documents_required?: boolean
    record_owner?: boolean
    observation?: boolean
    attached_files?: boolean
    sellersId?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    sellers?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    comercial_name?: boolean
    category?: boolean
    origin_country?: boolean
    price_comercial?: boolean
    price_local?: boolean
    currency?: boolean
    comission?: boolean
    incoterm?: boolean
    regulator_organ_number?: boolean
    sanity_rules?: boolean
    pack_type?: boolean
    quantity_per_pack?: boolean
    quantity_per_container?: boolean
    container_type?: boolean
    country_from?: boolean
    supply_origin_country?: boolean
    port_origin?: boolean
    port_destination?: boolean
    documents_required?: boolean
    record_owner?: boolean
    observation?: boolean
    attached_files?: boolean
    sellersId?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "name" | "comercial_name" | "category" | "origin_country" | "price_comercial" | "price_local" | "currency" | "comission" | "incoterm" | "regulator_organ_number" | "sanity_rules" | "pack_type" | "quantity_per_pack" | "quantity_per_container" | "container_type" | "country_from" | "supply_origin_country" | "port_origin" | "port_destination" | "documents_required" | "record_owner" | "observation" | "attached_files" | "sellersId" | "createdAt" | "active" | "status", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | SellerDefaultArgs<ExtArgs>
    contracts?: boolean | Product$contractsArgs<ExtArgs>
    contractProducts?: boolean | Product$contractProductsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | SellerDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | SellerDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      sellers: Prisma.$SellerPayload<ExtArgs>
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      contractProducts: Prisma.$ContractProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      name: string
      comercial_name: string
      category: string
      origin_country: string
      price_comercial: number
      price_local: number
      currency: string
      comission: number
      incoterm: string[]
      regulator_organ_number: string
      sanity_rules: string[]
      pack_type: string
      quantity_per_pack: number
      quantity_per_container: number
      container_type: string
      country_from: string
      supply_origin_country: string
      port_origin: string
      port_destination: string
      documents_required: string[]
      record_owner: string
      observation: string
      attached_files: string[]
      sellersId: number
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellers<T extends SellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerDefaultArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contracts<T extends Product$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Product$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contractProducts<T extends Product$contractProductsArgs<ExtArgs> = {}>(args?: Subset<T, Product$contractProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly comercial_name: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly origin_country: FieldRef<"Product", 'String'>
    readonly price_comercial: FieldRef<"Product", 'Float'>
    readonly price_local: FieldRef<"Product", 'Float'>
    readonly currency: FieldRef<"Product", 'String'>
    readonly comission: FieldRef<"Product", 'Float'>
    readonly incoterm: FieldRef<"Product", 'String[]'>
    readonly regulator_organ_number: FieldRef<"Product", 'String'>
    readonly sanity_rules: FieldRef<"Product", 'String[]'>
    readonly pack_type: FieldRef<"Product", 'String'>
    readonly quantity_per_pack: FieldRef<"Product", 'Float'>
    readonly quantity_per_container: FieldRef<"Product", 'Float'>
    readonly container_type: FieldRef<"Product", 'String'>
    readonly country_from: FieldRef<"Product", 'String'>
    readonly supply_origin_country: FieldRef<"Product", 'String'>
    readonly port_origin: FieldRef<"Product", 'String'>
    readonly port_destination: FieldRef<"Product", 'String'>
    readonly documents_required: FieldRef<"Product", 'String[]'>
    readonly record_owner: FieldRef<"Product", 'String'>
    readonly observation: FieldRef<"Product", 'String'>
    readonly attached_files: FieldRef<"Product", 'String[]'>
    readonly sellersId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly status: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.contracts
   */
  export type Product$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Product.contractProducts
   */
  export type Product$contractProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    where?: ContractProductWhereInput
    orderBy?: ContractProductOrderByWithRelationInput | ContractProductOrderByWithRelationInput[]
    cursor?: ContractProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractProductScalarFieldEnum | ContractProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Seller
   */

  export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null
    _avg: SellerAvgAggregateOutputType | null
    _sum: SellerSumAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  export type SellerAvgAggregateOutputType = {
    id: number | null
  }

  export type SellerSumAggregateOutputType = {
    id: number | null
  }

  export type SellerMinAggregateOutputType = {
    id: number | null
    company_name: string | null
    full_address: string | null
    country: string | null
    tax_id: string | null
    contact_name: string | null
    whatsapp: string | null
    website: string | null
    note: string | null
    description: string | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type SellerMaxAggregateOutputType = {
    id: number | null
    company_name: string | null
    full_address: string | null
    country: string | null
    tax_id: string | null
    contact_name: string | null
    whatsapp: string | null
    website: string | null
    note: string | null
    description: string | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type SellerCountAggregateOutputType = {
    id: number
    company_name: number
    full_address: number
    country: number
    tax_id: number
    contact_name: number
    whatsapp: number
    phone: number
    email: number
    website: number
    note: number
    description: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type SellerAvgAggregateInputType = {
    id?: true
  }

  export type SellerSumAggregateInputType = {
    id?: true
  }

  export type SellerMinAggregateInputType = {
    id?: true
    company_name?: true
    full_address?: true
    country?: true
    tax_id?: true
    contact_name?: true
    whatsapp?: true
    website?: true
    note?: true
    description?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type SellerMaxAggregateInputType = {
    id?: true
    company_name?: true
    full_address?: true
    country?: true
    tax_id?: true
    contact_name?: true
    whatsapp?: true
    website?: true
    note?: true
    description?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type SellerCountAggregateInputType = {
    id?: true
    company_name?: true
    full_address?: true
    country?: true
    tax_id?: true
    contact_name?: true
    whatsapp?: true
    phone?: true
    email?: true
    website?: true
    note?: true
    description?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type SellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seller to aggregate.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sellers
    **/
    _count?: true | SellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerMaxAggregateInputType
  }

  export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeller[P]>
      : GetScalarType<T[P], AggregateSeller[P]>
  }




  export type SellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerWhereInput
    orderBy?: SellerOrderByWithAggregationInput | SellerOrderByWithAggregationInput[]
    by: SellerScalarFieldEnum[] | SellerScalarFieldEnum
    having?: SellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerCountAggregateInputType | true
    _avg?: SellerAvgAggregateInputType
    _sum?: SellerSumAggregateInputType
    _min?: SellerMinAggregateInputType
    _max?: SellerMaxAggregateInputType
  }

  export type SellerGroupByOutputType = {
    id: number
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone: string[]
    email: string[]
    website: string
    note: string
    description: string
    createdAt: Date
    active: boolean
    status: string
    _count: SellerCountAggregateOutputType | null
    _avg: SellerAvgAggregateOutputType | null
    _sum: SellerSumAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerGroupByOutputType[P]>
            : GetScalarType<T[P], SellerGroupByOutputType[P]>
        }
      >
    >


  export type SellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    products?: boolean | Seller$productsArgs<ExtArgs>
    contracts?: boolean | Seller$contractsArgs<ExtArgs>
    _count?: boolean | SellerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectScalar = {
    id?: boolean
    company_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type SellerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "full_address" | "country" | "tax_id" | "contact_name" | "whatsapp" | "phone" | "email" | "website" | "note" | "description" | "createdAt" | "active" | "status", ExtArgs["result"]["seller"]>
  export type SellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Seller$productsArgs<ExtArgs>
    contracts?: boolean | Seller$contractsArgs<ExtArgs>
    _count?: boolean | SellerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SellerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SellerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seller"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_name: string
      full_address: string
      country: string
      tax_id: string
      contact_name: string
      whatsapp: string
      phone: string[]
      email: string[]
      website: string
      note: string
      description: string
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["seller"]>
    composites: {}
  }

  type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = $Result.GetResult<Prisma.$SellerPayload, S>

  type SellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerCountAggregateInputType | true
    }

  export interface SellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seller'], meta: { name: 'Seller' } }
    /**
     * Find zero or one Seller that matches the filter.
     * @param {SellerFindUniqueArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerFindUniqueArgs>(args: SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerFindUniqueOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerFindFirstArgs>(args?: SelectSubset<T, SellerFindFirstArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.seller.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.seller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerWithIdOnly = await prisma.seller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerFindManyArgs>(args?: SelectSubset<T, SellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seller.
     * @param {SellerCreateArgs} args - Arguments to create a Seller.
     * @example
     * // Create one Seller
     * const Seller = await prisma.seller.create({
     *   data: {
     *     // ... data to create a Seller
     *   }
     * })
     * 
     */
    create<T extends SellerCreateArgs>(args: SelectSubset<T, SellerCreateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {SellerCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerCreateManyArgs>(args?: SelectSubset<T, SellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sellers and returns the data saved in the database.
     * @param {SellerCreateManyAndReturnArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seller.
     * @param {SellerDeleteArgs} args - Arguments to delete one Seller.
     * @example
     * // Delete one Seller
     * const Seller = await prisma.seller.delete({
     *   where: {
     *     // ... filter to delete one Seller
     *   }
     * })
     * 
     */
    delete<T extends SellerDeleteArgs>(args: SelectSubset<T, SellerDeleteArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seller.
     * @param {SellerUpdateArgs} args - Arguments to update one Seller.
     * @example
     * // Update one Seller
     * const seller = await prisma.seller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerUpdateArgs>(args: SelectSubset<T, SellerUpdateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {SellerDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.seller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerDeleteManyArgs>(args?: SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerUpdateManyArgs>(args: SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers and returns the data updated in the database.
     * @param {SellerUpdateManyAndReturnArgs} args - Arguments to update many Sellers.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SellerUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seller.
     * @param {SellerUpsertArgs} args - Arguments to update or create a Seller.
     * @example
     * // Update or create a Seller
     * const seller = await prisma.seller.upsert({
     *   create: {
     *     // ... data to create a Seller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seller we want to update
     *   }
     * })
     */
    upsert<T extends SellerUpsertArgs>(args: SelectSubset<T, SellerUpsertArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.seller.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends SellerCountArgs>(
      args?: Subset<T, SellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerAggregateArgs>(args: Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>

    /**
     * Group by Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerGroupByArgs} args - Group by arguments.
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
      T extends SellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerGroupByArgs['orderBy'] }
        : { orderBy?: SellerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seller model
   */
  readonly fields: SellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Seller$productsArgs<ExtArgs> = {}>(args?: Subset<T, Seller$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends Seller$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Seller$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Seller model
   */
  interface SellerFieldRefs {
    readonly id: FieldRef<"Seller", 'Int'>
    readonly company_name: FieldRef<"Seller", 'String'>
    readonly full_address: FieldRef<"Seller", 'String'>
    readonly country: FieldRef<"Seller", 'String'>
    readonly tax_id: FieldRef<"Seller", 'String'>
    readonly contact_name: FieldRef<"Seller", 'String'>
    readonly whatsapp: FieldRef<"Seller", 'String'>
    readonly phone: FieldRef<"Seller", 'String[]'>
    readonly email: FieldRef<"Seller", 'String[]'>
    readonly website: FieldRef<"Seller", 'String'>
    readonly note: FieldRef<"Seller", 'String'>
    readonly description: FieldRef<"Seller", 'String'>
    readonly createdAt: FieldRef<"Seller", 'DateTime'>
    readonly active: FieldRef<"Seller", 'Boolean'>
    readonly status: FieldRef<"Seller", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seller findUnique
   */
  export type SellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findUniqueOrThrow
   */
  export type SellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findFirst
   */
  export type SellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findFirstOrThrow
   */
  export type SellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findMany
   */
  export type SellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter, which Sellers to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller create
   */
  export type SellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to create a Seller.
     */
    data: XOR<SellerCreateInput, SellerUncheckedCreateInput>
  }

  /**
   * Seller createMany
   */
  export type SellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seller createManyAndReturn
   */
  export type SellerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seller update
   */
  export type SellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The data needed to update a Seller.
     */
    data: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
    /**
     * Choose, which Seller to update.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller updateMany
   */
  export type SellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
  }

  /**
   * Seller updateManyAndReturn
   */
  export type SellerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
  }

  /**
   * Seller upsert
   */
  export type SellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * The filter to search for the Seller to update in case it exists.
     */
    where: SellerWhereUniqueInput
    /**
     * In case the Seller found by the `where` argument doesn't exist, create a new Seller with this data.
     */
    create: XOR<SellerCreateInput, SellerUncheckedCreateInput>
    /**
     * In case the Seller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
  }

  /**
   * Seller delete
   */
  export type SellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
    /**
     * Filter which Seller to delete.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller deleteMany
   */
  export type SellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sellers to delete
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to delete.
     */
    limit?: number
  }

  /**
   * Seller.products
   */
  export type Seller$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Seller.contracts
   */
  export type Seller$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Seller without action
   */
  export type SellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    full_name: string | null
    full_address: string | null
    country: string | null
    tax_id: string | null
    contact_name: string | null
    whatsapp: string | null
    website: string | null
    note: string | null
    description: string | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    full_name: string | null
    full_address: string | null
    country: string | null
    tax_id: string | null
    contact_name: string | null
    whatsapp: string | null
    website: string | null
    note: string | null
    description: string | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    full_name: number
    full_address: number
    country: number
    tax_id: number
    contact_name: number
    whatsapp: number
    phone: number
    email: number
    website: number
    note: number
    description: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    full_name?: true
    full_address?: true
    country?: true
    tax_id?: true
    contact_name?: true
    whatsapp?: true
    website?: true
    note?: true
    description?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    full_name?: true
    full_address?: true
    country?: true
    tax_id?: true
    contact_name?: true
    whatsapp?: true
    website?: true
    note?: true
    description?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    full_name?: true
    full_address?: true
    country?: true
    tax_id?: true
    contact_name?: true
    whatsapp?: true
    phone?: true
    email?: true
    website?: true
    note?: true
    description?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    full_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone: string[]
    email: string[]
    website: string
    note: string
    description: string
    createdAt: Date
    active: boolean
    status: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    full_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contracts?: boolean | Customer$contractsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    full_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    full_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    full_name?: boolean
    full_address?: boolean
    country?: boolean
    tax_id?: boolean
    contact_name?: boolean
    whatsapp?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    note?: boolean
    description?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "full_name" | "full_address" | "country" | "tax_id" | "contact_name" | "whatsapp" | "phone" | "email" | "website" | "note" | "description" | "createdAt" | "active" | "status", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | Customer$contractsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      full_name: string
      full_address: string
      country: string
      tax_id: string
      contact_name: string
      whatsapp: string
      phone: string[]
      email: string[]
      website: string
      note: string
      description: string
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends Customer$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly full_name: FieldRef<"Customer", 'String'>
    readonly full_address: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly tax_id: FieldRef<"Customer", 'String'>
    readonly contact_name: FieldRef<"Customer", 'String'>
    readonly whatsapp: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String[]'>
    readonly email: FieldRef<"Customer", 'String[]'>
    readonly website: FieldRef<"Customer", 'String'>
    readonly note: FieldRef<"Customer", 'String'>
    readonly description: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly active: FieldRef<"Customer", 'Boolean'>
    readonly status: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.contracts
   */
  export type Customer$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    seller_id: number | null
    products_id: number | null
    mt_value: number | null
    payment_amount: number | null
    commission_customer: number | null
    commission_seller: number | null
    comission_total: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    seller_id: number | null
    products_id: number[]
    mt_value: number | null
    payment_amount: number | null
    commission_customer: number | null
    commission_seller: number | null
    comission_total: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    date_creation: Date | null
    date_expiration: Date | null
    date_signature: Date | null
    date_expiration_signature: Date | null
    date_signature_customer: Date | null
    date_expiration_signature_customer: Date | null
    date_signature_seller: Date | null
    date_expiration_signature_seller: Date | null
    customer_id: number | null
    seller_id: number | null
    bording_date: Date | null
    mt_value: number | null
    destination_country: string | null
    destination_port: string | null
    shipping_company: string | null
    shipment_date: Date | null
    si_sent: boolean | null
    payment_terms: string | null
    payment_method: string | null
    payment_currency: string | null
    payment_amount: number | null
    payment_date: Date | null
    payment_status: string | null
    payment_notes: string | null
    payment_notes_customer: string | null
    payment_notes_seller: string | null
    commission_customer: number | null
    commission_seller: number | null
    comission_total: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    date_creation: Date | null
    date_expiration: Date | null
    date_signature: Date | null
    date_expiration_signature: Date | null
    date_signature_customer: Date | null
    date_expiration_signature_customer: Date | null
    date_signature_seller: Date | null
    date_expiration_signature_seller: Date | null
    customer_id: number | null
    seller_id: number | null
    bording_date: Date | null
    mt_value: number | null
    destination_country: string | null
    destination_port: string | null
    shipping_company: string | null
    shipment_date: Date | null
    si_sent: boolean | null
    payment_terms: string | null
    payment_method: string | null
    payment_currency: string | null
    payment_amount: number | null
    payment_date: Date | null
    payment_status: string | null
    payment_notes: string | null
    payment_notes_customer: string | null
    payment_notes_seller: string | null
    commission_customer: number | null
    commission_seller: number | null
    comission_total: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    name: number
    description: number
    date_creation: number
    date_expiration: number
    date_signature: number
    date_expiration_signature: number
    date_signature_customer: number
    date_expiration_signature_customer: number
    date_signature_seller: number
    date_expiration_signature_seller: number
    customer_id: number
    seller_id: number
    products_id: number
    bording_date: number
    mt_value: number
    destination_country: number
    destination_port: number
    shipping_company: number
    shipment_date: number
    si_sent: number
    packing: number
    incoterm: number
    payment_terms: number
    payment_method: number
    payment_currency: number
    payment_amount: number
    payment_date: number
    payment_status: number
    payment_notes: number
    payment_attachments: number
    payment_notes_customer: number
    payment_attachments_customer: number
    payment_notes_seller: number
    payment_attachments_seller: number
    special_terms: number
    business_terms: number
    legal_terms: number
    other_terms: number
    other_terms_customer: number
    other_terms_seller: number
    other_terms_customer_seller: number
    other_terms_seller_customer: number
    other_terms_customer_seller_customer: number
    other_terms_seller_customer_seller: number
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    customer_id?: true
    seller_id?: true
    products_id?: true
    mt_value?: true
    payment_amount?: true
    commission_customer?: true
    commission_seller?: true
    comission_total?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    customer_id?: true
    seller_id?: true
    products_id?: true
    mt_value?: true
    payment_amount?: true
    commission_customer?: true
    commission_seller?: true
    comission_total?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date_creation?: true
    date_expiration?: true
    date_signature?: true
    date_expiration_signature?: true
    date_signature_customer?: true
    date_expiration_signature_customer?: true
    date_signature_seller?: true
    date_expiration_signature_seller?: true
    customer_id?: true
    seller_id?: true
    bording_date?: true
    mt_value?: true
    destination_country?: true
    destination_port?: true
    shipping_company?: true
    shipment_date?: true
    si_sent?: true
    payment_terms?: true
    payment_method?: true
    payment_currency?: true
    payment_amount?: true
    payment_date?: true
    payment_status?: true
    payment_notes?: true
    payment_notes_customer?: true
    payment_notes_seller?: true
    commission_customer?: true
    commission_seller?: true
    comission_total?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date_creation?: true
    date_expiration?: true
    date_signature?: true
    date_expiration_signature?: true
    date_signature_customer?: true
    date_expiration_signature_customer?: true
    date_signature_seller?: true
    date_expiration_signature_seller?: true
    customer_id?: true
    seller_id?: true
    bording_date?: true
    mt_value?: true
    destination_country?: true
    destination_port?: true
    shipping_company?: true
    shipment_date?: true
    si_sent?: true
    payment_terms?: true
    payment_method?: true
    payment_currency?: true
    payment_amount?: true
    payment_date?: true
    payment_status?: true
    payment_notes?: true
    payment_notes_customer?: true
    payment_notes_seller?: true
    commission_customer?: true
    commission_seller?: true
    comission_total?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date_creation?: true
    date_expiration?: true
    date_signature?: true
    date_expiration_signature?: true
    date_signature_customer?: true
    date_expiration_signature_customer?: true
    date_signature_seller?: true
    date_expiration_signature_seller?: true
    customer_id?: true
    seller_id?: true
    products_id?: true
    bording_date?: true
    mt_value?: true
    destination_country?: true
    destination_port?: true
    shipping_company?: true
    shipment_date?: true
    si_sent?: true
    packing?: true
    incoterm?: true
    payment_terms?: true
    payment_method?: true
    payment_currency?: true
    payment_amount?: true
    payment_date?: true
    payment_status?: true
    payment_notes?: true
    payment_attachments?: true
    payment_notes_customer?: true
    payment_attachments_customer?: true
    payment_notes_seller?: true
    payment_attachments_seller?: true
    special_terms?: true
    business_terms?: true
    legal_terms?: true
    other_terms?: true
    other_terms_customer?: true
    other_terms_seller?: true
    other_terms_customer_seller?: true
    other_terms_seller_customer?: true
    other_terms_customer_seller_customer?: true
    other_terms_seller_customer_seller?: true
    commission_customer?: true
    commission_seller?: true
    comission_total?: true
    attachments?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    name: string
    description: string
    date_creation: Date
    date_expiration: Date
    date_signature: Date
    date_expiration_signature: Date
    date_signature_customer: Date
    date_expiration_signature_customer: Date
    date_signature_seller: Date
    date_expiration_signature_seller: Date
    customer_id: number
    seller_id: number
    products_id: number[]
    bording_date: Date
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date
    si_sent: boolean
    packing: string[]
    incoterm: string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date
    payment_status: string
    payment_notes: string
    payment_attachments: string[]
    payment_notes_customer: string
    payment_attachments_customer: string[]
    payment_notes_seller: string
    payment_attachments_seller: string[]
    special_terms: string[]
    business_terms: string[]
    legal_terms: string[]
    other_terms: string[]
    other_terms_customer: string[]
    other_terms_seller: string[]
    other_terms_customer_seller: string[]
    other_terms_seller_customer: string[]
    other_terms_customer_seller_customer: string[]
    other_terms_seller_customer_seller: string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments: string[]
    createdAt: Date
    active: boolean
    status: string
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date_creation?: boolean
    date_expiration?: boolean
    date_signature?: boolean
    date_expiration_signature?: boolean
    date_signature_customer?: boolean
    date_expiration_signature_customer?: boolean
    date_signature_seller?: boolean
    date_expiration_signature_seller?: boolean
    customer_id?: boolean
    seller_id?: boolean
    products_id?: boolean
    bording_date?: boolean
    mt_value?: boolean
    destination_country?: boolean
    destination_port?: boolean
    shipping_company?: boolean
    shipment_date?: boolean
    si_sent?: boolean
    packing?: boolean
    incoterm?: boolean
    payment_terms?: boolean
    payment_method?: boolean
    payment_currency?: boolean
    payment_amount?: boolean
    payment_date?: boolean
    payment_status?: boolean
    payment_notes?: boolean
    payment_attachments?: boolean
    payment_notes_customer?: boolean
    payment_attachments_customer?: boolean
    payment_notes_seller?: boolean
    payment_attachments_seller?: boolean
    special_terms?: boolean
    business_terms?: boolean
    legal_terms?: boolean
    other_terms?: boolean
    other_terms_customer?: boolean
    other_terms_seller?: boolean
    other_terms_customer_seller?: boolean
    other_terms_seller_customer?: boolean
    other_terms_customer_seller_customer?: boolean
    other_terms_seller_customer_seller?: boolean
    commission_customer?: boolean
    commission_seller?: boolean
    comission_total?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    seller?: boolean | SellerDefaultArgs<ExtArgs>
    products?: boolean | Contract$productsArgs<ExtArgs>
    contractProducts?: boolean | Contract$contractProductsArgs<ExtArgs>
    arbitration_rules?: boolean | Contract$arbitration_rulesArgs<ExtArgs>
    special_conditions?: boolean | Contract$special_conditionsArgs<ExtArgs>
    brokerageInvoices?: boolean | Contract$brokerageInvoicesArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date_creation?: boolean
    date_expiration?: boolean
    date_signature?: boolean
    date_expiration_signature?: boolean
    date_signature_customer?: boolean
    date_expiration_signature_customer?: boolean
    date_signature_seller?: boolean
    date_expiration_signature_seller?: boolean
    customer_id?: boolean
    seller_id?: boolean
    products_id?: boolean
    bording_date?: boolean
    mt_value?: boolean
    destination_country?: boolean
    destination_port?: boolean
    shipping_company?: boolean
    shipment_date?: boolean
    si_sent?: boolean
    packing?: boolean
    incoterm?: boolean
    payment_terms?: boolean
    payment_method?: boolean
    payment_currency?: boolean
    payment_amount?: boolean
    payment_date?: boolean
    payment_status?: boolean
    payment_notes?: boolean
    payment_attachments?: boolean
    payment_notes_customer?: boolean
    payment_attachments_customer?: boolean
    payment_notes_seller?: boolean
    payment_attachments_seller?: boolean
    special_terms?: boolean
    business_terms?: boolean
    legal_terms?: boolean
    other_terms?: boolean
    other_terms_customer?: boolean
    other_terms_seller?: boolean
    other_terms_customer_seller?: boolean
    other_terms_seller_customer?: boolean
    other_terms_customer_seller_customer?: boolean
    other_terms_seller_customer_seller?: boolean
    commission_customer?: boolean
    commission_seller?: boolean
    comission_total?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date_creation?: boolean
    date_expiration?: boolean
    date_signature?: boolean
    date_expiration_signature?: boolean
    date_signature_customer?: boolean
    date_expiration_signature_customer?: boolean
    date_signature_seller?: boolean
    date_expiration_signature_seller?: boolean
    customer_id?: boolean
    seller_id?: boolean
    products_id?: boolean
    bording_date?: boolean
    mt_value?: boolean
    destination_country?: boolean
    destination_port?: boolean
    shipping_company?: boolean
    shipment_date?: boolean
    si_sent?: boolean
    packing?: boolean
    incoterm?: boolean
    payment_terms?: boolean
    payment_method?: boolean
    payment_currency?: boolean
    payment_amount?: boolean
    payment_date?: boolean
    payment_status?: boolean
    payment_notes?: boolean
    payment_attachments?: boolean
    payment_notes_customer?: boolean
    payment_attachments_customer?: boolean
    payment_notes_seller?: boolean
    payment_attachments_seller?: boolean
    special_terms?: boolean
    business_terms?: boolean
    legal_terms?: boolean
    other_terms?: boolean
    other_terms_customer?: boolean
    other_terms_seller?: boolean
    other_terms_customer_seller?: boolean
    other_terms_seller_customer?: boolean
    other_terms_customer_seller_customer?: boolean
    other_terms_seller_customer_seller?: boolean
    commission_customer?: boolean
    commission_seller?: boolean
    comission_total?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    date_creation?: boolean
    date_expiration?: boolean
    date_signature?: boolean
    date_expiration_signature?: boolean
    date_signature_customer?: boolean
    date_expiration_signature_customer?: boolean
    date_signature_seller?: boolean
    date_expiration_signature_seller?: boolean
    customer_id?: boolean
    seller_id?: boolean
    products_id?: boolean
    bording_date?: boolean
    mt_value?: boolean
    destination_country?: boolean
    destination_port?: boolean
    shipping_company?: boolean
    shipment_date?: boolean
    si_sent?: boolean
    packing?: boolean
    incoterm?: boolean
    payment_terms?: boolean
    payment_method?: boolean
    payment_currency?: boolean
    payment_amount?: boolean
    payment_date?: boolean
    payment_status?: boolean
    payment_notes?: boolean
    payment_attachments?: boolean
    payment_notes_customer?: boolean
    payment_attachments_customer?: boolean
    payment_notes_seller?: boolean
    payment_attachments_seller?: boolean
    special_terms?: boolean
    business_terms?: boolean
    legal_terms?: boolean
    other_terms?: boolean
    other_terms_customer?: boolean
    other_terms_seller?: boolean
    other_terms_customer_seller?: boolean
    other_terms_seller_customer?: boolean
    other_terms_customer_seller_customer?: boolean
    other_terms_seller_customer_seller?: boolean
    commission_customer?: boolean
    commission_seller?: boolean
    comission_total?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "date_creation" | "date_expiration" | "date_signature" | "date_expiration_signature" | "date_signature_customer" | "date_expiration_signature_customer" | "date_signature_seller" | "date_expiration_signature_seller" | "customer_id" | "seller_id" | "products_id" | "bording_date" | "mt_value" | "destination_country" | "destination_port" | "shipping_company" | "shipment_date" | "si_sent" | "packing" | "incoterm" | "payment_terms" | "payment_method" | "payment_currency" | "payment_amount" | "payment_date" | "payment_status" | "payment_notes" | "payment_attachments" | "payment_notes_customer" | "payment_attachments_customer" | "payment_notes_seller" | "payment_attachments_seller" | "special_terms" | "business_terms" | "legal_terms" | "other_terms" | "other_terms_customer" | "other_terms_seller" | "other_terms_customer_seller" | "other_terms_seller_customer" | "other_terms_customer_seller_customer" | "other_terms_seller_customer_seller" | "commission_customer" | "commission_seller" | "comission_total" | "attachments" | "createdAt" | "active" | "status", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    seller?: boolean | SellerDefaultArgs<ExtArgs>
    products?: boolean | Contract$productsArgs<ExtArgs>
    contractProducts?: boolean | Contract$contractProductsArgs<ExtArgs>
    arbitration_rules?: boolean | Contract$arbitration_rulesArgs<ExtArgs>
    special_conditions?: boolean | Contract$special_conditionsArgs<ExtArgs>
    brokerageInvoices?: boolean | Contract$brokerageInvoicesArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    seller?: boolean | SellerDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      seller: Prisma.$SellerPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
      contractProducts: Prisma.$ContractProductPayload<ExtArgs>[]
      arbitration_rules: Prisma.$ArbitrationRulePayload<ExtArgs>[]
      special_conditions: Prisma.$SpecialConditionPayload<ExtArgs>[]
      brokerageInvoices: Prisma.$BrokerageInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      date_creation: Date
      date_expiration: Date
      date_signature: Date
      date_expiration_signature: Date
      date_signature_customer: Date
      date_expiration_signature_customer: Date
      date_signature_seller: Date
      date_expiration_signature_seller: Date
      customer_id: number
      seller_id: number
      products_id: number[]
      bording_date: Date
      mt_value: number
      destination_country: string
      destination_port: string
      shipping_company: string
      shipment_date: Date
      si_sent: boolean
      packing: string[]
      incoterm: string[]
      payment_terms: string
      payment_method: string
      payment_currency: string
      payment_amount: number
      payment_date: Date
      payment_status: string
      payment_notes: string
      payment_attachments: string[]
      payment_notes_customer: string
      payment_attachments_customer: string[]
      payment_notes_seller: string
      payment_attachments_seller: string[]
      special_terms: string[]
      business_terms: string[]
      legal_terms: string[]
      other_terms: string[]
      other_terms_customer: string[]
      other_terms_seller: string[]
      other_terms_customer_seller: string[]
      other_terms_seller_customer: string[]
      other_terms_customer_seller_customer: string[]
      other_terms_seller_customer_seller: string[]
      commission_customer: number
      commission_seller: number
      comission_total: number
      attachments: string[]
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends SellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerDefaultArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Contract$productsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contractProducts<T extends Contract$contractProductsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$contractProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arbitration_rules<T extends Contract$arbitration_rulesArgs<ExtArgs> = {}>(args?: Subset<T, Contract$arbitration_rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    special_conditions<T extends Contract$special_conditionsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$special_conditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brokerageInvoices<T extends Contract$brokerageInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Contract$brokerageInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly name: FieldRef<"Contract", 'String'>
    readonly description: FieldRef<"Contract", 'String'>
    readonly date_creation: FieldRef<"Contract", 'DateTime'>
    readonly date_expiration: FieldRef<"Contract", 'DateTime'>
    readonly date_signature: FieldRef<"Contract", 'DateTime'>
    readonly date_expiration_signature: FieldRef<"Contract", 'DateTime'>
    readonly date_signature_customer: FieldRef<"Contract", 'DateTime'>
    readonly date_expiration_signature_customer: FieldRef<"Contract", 'DateTime'>
    readonly date_signature_seller: FieldRef<"Contract", 'DateTime'>
    readonly date_expiration_signature_seller: FieldRef<"Contract", 'DateTime'>
    readonly customer_id: FieldRef<"Contract", 'Int'>
    readonly seller_id: FieldRef<"Contract", 'Int'>
    readonly products_id: FieldRef<"Contract", 'Int[]'>
    readonly bording_date: FieldRef<"Contract", 'DateTime'>
    readonly mt_value: FieldRef<"Contract", 'Float'>
    readonly destination_country: FieldRef<"Contract", 'String'>
    readonly destination_port: FieldRef<"Contract", 'String'>
    readonly shipping_company: FieldRef<"Contract", 'String'>
    readonly shipment_date: FieldRef<"Contract", 'DateTime'>
    readonly si_sent: FieldRef<"Contract", 'Boolean'>
    readonly packing: FieldRef<"Contract", 'String[]'>
    readonly incoterm: FieldRef<"Contract", 'String[]'>
    readonly payment_terms: FieldRef<"Contract", 'String'>
    readonly payment_method: FieldRef<"Contract", 'String'>
    readonly payment_currency: FieldRef<"Contract", 'String'>
    readonly payment_amount: FieldRef<"Contract", 'Float'>
    readonly payment_date: FieldRef<"Contract", 'DateTime'>
    readonly payment_status: FieldRef<"Contract", 'String'>
    readonly payment_notes: FieldRef<"Contract", 'String'>
    readonly payment_attachments: FieldRef<"Contract", 'String[]'>
    readonly payment_notes_customer: FieldRef<"Contract", 'String'>
    readonly payment_attachments_customer: FieldRef<"Contract", 'String[]'>
    readonly payment_notes_seller: FieldRef<"Contract", 'String'>
    readonly payment_attachments_seller: FieldRef<"Contract", 'String[]'>
    readonly special_terms: FieldRef<"Contract", 'String[]'>
    readonly business_terms: FieldRef<"Contract", 'String[]'>
    readonly legal_terms: FieldRef<"Contract", 'String[]'>
    readonly other_terms: FieldRef<"Contract", 'String[]'>
    readonly other_terms_customer: FieldRef<"Contract", 'String[]'>
    readonly other_terms_seller: FieldRef<"Contract", 'String[]'>
    readonly other_terms_customer_seller: FieldRef<"Contract", 'String[]'>
    readonly other_terms_seller_customer: FieldRef<"Contract", 'String[]'>
    readonly other_terms_customer_seller_customer: FieldRef<"Contract", 'String[]'>
    readonly other_terms_seller_customer_seller: FieldRef<"Contract", 'String[]'>
    readonly commission_customer: FieldRef<"Contract", 'Float'>
    readonly commission_seller: FieldRef<"Contract", 'Float'>
    readonly comission_total: FieldRef<"Contract", 'Float'>
    readonly attachments: FieldRef<"Contract", 'String[]'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly active: FieldRef<"Contract", 'Boolean'>
    readonly status: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.products
   */
  export type Contract$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Contract.contractProducts
   */
  export type Contract$contractProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    where?: ContractProductWhereInput
    orderBy?: ContractProductOrderByWithRelationInput | ContractProductOrderByWithRelationInput[]
    cursor?: ContractProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractProductScalarFieldEnum | ContractProductScalarFieldEnum[]
  }

  /**
   * Contract.arbitration_rules
   */
  export type Contract$arbitration_rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    where?: ArbitrationRuleWhereInput
    orderBy?: ArbitrationRuleOrderByWithRelationInput | ArbitrationRuleOrderByWithRelationInput[]
    cursor?: ArbitrationRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArbitrationRuleScalarFieldEnum | ArbitrationRuleScalarFieldEnum[]
  }

  /**
   * Contract.special_conditions
   */
  export type Contract$special_conditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    where?: SpecialConditionWhereInput
    orderBy?: SpecialConditionOrderByWithRelationInput | SpecialConditionOrderByWithRelationInput[]
    cursor?: SpecialConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialConditionScalarFieldEnum | SpecialConditionScalarFieldEnum[]
  }

  /**
   * Contract.brokerageInvoices
   */
  export type Contract$brokerageInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    where?: BrokerageInvoiceWhereInput
    orderBy?: BrokerageInvoiceOrderByWithRelationInput | BrokerageInvoiceOrderByWithRelationInput[]
    cursor?: BrokerageInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrokerageInvoiceScalarFieldEnum | BrokerageInvoiceScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model ContractProduct
   */

  export type AggregateContractProduct = {
    _count: ContractProductCountAggregateOutputType | null
    _avg: ContractProductAvgAggregateOutputType | null
    _sum: ContractProductSumAggregateOutputType | null
    _min: ContractProductMinAggregateOutputType | null
    _max: ContractProductMaxAggregateOutputType | null
  }

  export type ContractProductAvgAggregateOutputType = {
    id: number | null
    contract_id: number | null
    product_id: number | null
  }

  export type ContractProductSumAggregateOutputType = {
    id: number | null
    contract_id: number | null
    product_id: number | null
  }

  export type ContractProductMinAggregateOutputType = {
    id: number | null
    contract_id: number | null
    product_id: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ContractProductMaxAggregateOutputType = {
    id: number | null
    contract_id: number | null
    product_id: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ContractProductCountAggregateOutputType = {
    id: number
    contract_id: number
    product_id: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type ContractProductAvgAggregateInputType = {
    id?: true
    contract_id?: true
    product_id?: true
  }

  export type ContractProductSumAggregateInputType = {
    id?: true
    contract_id?: true
    product_id?: true
  }

  export type ContractProductMinAggregateInputType = {
    id?: true
    contract_id?: true
    product_id?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ContractProductMaxAggregateInputType = {
    id?: true
    contract_id?: true
    product_id?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ContractProductCountAggregateInputType = {
    id?: true
    contract_id?: true
    product_id?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type ContractProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractProduct to aggregate.
     */
    where?: ContractProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProducts to fetch.
     */
    orderBy?: ContractProductOrderByWithRelationInput | ContractProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractProducts
    **/
    _count?: true | ContractProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractProductMaxAggregateInputType
  }

  export type GetContractProductAggregateType<T extends ContractProductAggregateArgs> = {
        [P in keyof T & keyof AggregateContractProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractProduct[P]>
      : GetScalarType<T[P], AggregateContractProduct[P]>
  }




  export type ContractProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractProductWhereInput
    orderBy?: ContractProductOrderByWithAggregationInput | ContractProductOrderByWithAggregationInput[]
    by: ContractProductScalarFieldEnum[] | ContractProductScalarFieldEnum
    having?: ContractProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractProductCountAggregateInputType | true
    _avg?: ContractProductAvgAggregateInputType
    _sum?: ContractProductSumAggregateInputType
    _min?: ContractProductMinAggregateInputType
    _max?: ContractProductMaxAggregateInputType
  }

  export type ContractProductGroupByOutputType = {
    id: number
    contract_id: number
    product_id: number
    createdAt: Date
    active: boolean
    status: string
    _count: ContractProductCountAggregateOutputType | null
    _avg: ContractProductAvgAggregateOutputType | null
    _sum: ContractProductSumAggregateOutputType | null
    _min: ContractProductMinAggregateOutputType | null
    _max: ContractProductMaxAggregateOutputType | null
  }

  type GetContractProductGroupByPayload<T extends ContractProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractProductGroupByOutputType[P]>
            : GetScalarType<T[P], ContractProductGroupByOutputType[P]>
        }
      >
    >


  export type ContractProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contract_id?: boolean
    product_id?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractProduct"]>

  export type ContractProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contract_id?: boolean
    product_id?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractProduct"]>

  export type ContractProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contract_id?: boolean
    product_id?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractProduct"]>

  export type ContractProductSelectScalar = {
    id?: boolean
    contract_id?: boolean
    product_id?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type ContractProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contract_id" | "product_id" | "createdAt" | "active" | "status", ExtArgs["result"]["contractProduct"]>
  export type ContractProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ContractProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ContractProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ContractProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractProduct"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contract_id: number
      product_id: number
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["contractProduct"]>
    composites: {}
  }

  type ContractProductGetPayload<S extends boolean | null | undefined | ContractProductDefaultArgs> = $Result.GetResult<Prisma.$ContractProductPayload, S>

  type ContractProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractProductCountAggregateInputType | true
    }

  export interface ContractProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractProduct'], meta: { name: 'ContractProduct' } }
    /**
     * Find zero or one ContractProduct that matches the filter.
     * @param {ContractProductFindUniqueArgs} args - Arguments to find a ContractProduct
     * @example
     * // Get one ContractProduct
     * const contractProduct = await prisma.contractProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractProductFindUniqueArgs>(args: SelectSubset<T, ContractProductFindUniqueArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractProductFindUniqueOrThrowArgs} args - Arguments to find a ContractProduct
     * @example
     * // Get one ContractProduct
     * const contractProduct = await prisma.contractProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductFindFirstArgs} args - Arguments to find a ContractProduct
     * @example
     * // Get one ContractProduct
     * const contractProduct = await prisma.contractProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractProductFindFirstArgs>(args?: SelectSubset<T, ContractProductFindFirstArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductFindFirstOrThrowArgs} args - Arguments to find a ContractProduct
     * @example
     * // Get one ContractProduct
     * const contractProduct = await prisma.contractProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractProducts
     * const contractProducts = await prisma.contractProduct.findMany()
     * 
     * // Get first 10 ContractProducts
     * const contractProducts = await prisma.contractProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractProductWithIdOnly = await prisma.contractProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractProductFindManyArgs>(args?: SelectSubset<T, ContractProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractProduct.
     * @param {ContractProductCreateArgs} args - Arguments to create a ContractProduct.
     * @example
     * // Create one ContractProduct
     * const ContractProduct = await prisma.contractProduct.create({
     *   data: {
     *     // ... data to create a ContractProduct
     *   }
     * })
     * 
     */
    create<T extends ContractProductCreateArgs>(args: SelectSubset<T, ContractProductCreateArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractProducts.
     * @param {ContractProductCreateManyArgs} args - Arguments to create many ContractProducts.
     * @example
     * // Create many ContractProducts
     * const contractProduct = await prisma.contractProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractProductCreateManyArgs>(args?: SelectSubset<T, ContractProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractProducts and returns the data saved in the database.
     * @param {ContractProductCreateManyAndReturnArgs} args - Arguments to create many ContractProducts.
     * @example
     * // Create many ContractProducts
     * const contractProduct = await prisma.contractProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractProducts and only return the `id`
     * const contractProductWithIdOnly = await prisma.contractProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractProduct.
     * @param {ContractProductDeleteArgs} args - Arguments to delete one ContractProduct.
     * @example
     * // Delete one ContractProduct
     * const ContractProduct = await prisma.contractProduct.delete({
     *   where: {
     *     // ... filter to delete one ContractProduct
     *   }
     * })
     * 
     */
    delete<T extends ContractProductDeleteArgs>(args: SelectSubset<T, ContractProductDeleteArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractProduct.
     * @param {ContractProductUpdateArgs} args - Arguments to update one ContractProduct.
     * @example
     * // Update one ContractProduct
     * const contractProduct = await prisma.contractProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractProductUpdateArgs>(args: SelectSubset<T, ContractProductUpdateArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractProducts.
     * @param {ContractProductDeleteManyArgs} args - Arguments to filter ContractProducts to delete.
     * @example
     * // Delete a few ContractProducts
     * const { count } = await prisma.contractProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractProductDeleteManyArgs>(args?: SelectSubset<T, ContractProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractProducts
     * const contractProduct = await prisma.contractProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractProductUpdateManyArgs>(args: SelectSubset<T, ContractProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractProducts and returns the data updated in the database.
     * @param {ContractProductUpdateManyAndReturnArgs} args - Arguments to update many ContractProducts.
     * @example
     * // Update many ContractProducts
     * const contractProduct = await prisma.contractProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractProducts and only return the `id`
     * const contractProductWithIdOnly = await prisma.contractProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractProduct.
     * @param {ContractProductUpsertArgs} args - Arguments to update or create a ContractProduct.
     * @example
     * // Update or create a ContractProduct
     * const contractProduct = await prisma.contractProduct.upsert({
     *   create: {
     *     // ... data to create a ContractProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractProduct we want to update
     *   }
     * })
     */
    upsert<T extends ContractProductUpsertArgs>(args: SelectSubset<T, ContractProductUpsertArgs<ExtArgs>>): Prisma__ContractProductClient<$Result.GetResult<Prisma.$ContractProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductCountArgs} args - Arguments to filter ContractProducts to count.
     * @example
     * // Count the number of ContractProducts
     * const count = await prisma.contractProduct.count({
     *   where: {
     *     // ... the filter for the ContractProducts we want to count
     *   }
     * })
    **/
    count<T extends ContractProductCountArgs>(
      args?: Subset<T, ContractProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractProductAggregateArgs>(args: Subset<T, ContractProductAggregateArgs>): Prisma.PrismaPromise<GetContractProductAggregateType<T>>

    /**
     * Group by ContractProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProductGroupByArgs} args - Group by arguments.
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
      T extends ContractProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractProductGroupByArgs['orderBy'] }
        : { orderBy?: ContractProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractProduct model
   */
  readonly fields: ContractProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContractProduct model
   */
  interface ContractProductFieldRefs {
    readonly id: FieldRef<"ContractProduct", 'Int'>
    readonly contract_id: FieldRef<"ContractProduct", 'Int'>
    readonly product_id: FieldRef<"ContractProduct", 'Int'>
    readonly createdAt: FieldRef<"ContractProduct", 'DateTime'>
    readonly active: FieldRef<"ContractProduct", 'Boolean'>
    readonly status: FieldRef<"ContractProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContractProduct findUnique
   */
  export type ContractProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * Filter, which ContractProduct to fetch.
     */
    where: ContractProductWhereUniqueInput
  }

  /**
   * ContractProduct findUniqueOrThrow
   */
  export type ContractProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * Filter, which ContractProduct to fetch.
     */
    where: ContractProductWhereUniqueInput
  }

  /**
   * ContractProduct findFirst
   */
  export type ContractProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * Filter, which ContractProduct to fetch.
     */
    where?: ContractProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProducts to fetch.
     */
    orderBy?: ContractProductOrderByWithRelationInput | ContractProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractProducts.
     */
    cursor?: ContractProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractProducts.
     */
    distinct?: ContractProductScalarFieldEnum | ContractProductScalarFieldEnum[]
  }

  /**
   * ContractProduct findFirstOrThrow
   */
  export type ContractProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * Filter, which ContractProduct to fetch.
     */
    where?: ContractProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProducts to fetch.
     */
    orderBy?: ContractProductOrderByWithRelationInput | ContractProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractProducts.
     */
    cursor?: ContractProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractProducts.
     */
    distinct?: ContractProductScalarFieldEnum | ContractProductScalarFieldEnum[]
  }

  /**
   * ContractProduct findMany
   */
  export type ContractProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * Filter, which ContractProducts to fetch.
     */
    where?: ContractProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProducts to fetch.
     */
    orderBy?: ContractProductOrderByWithRelationInput | ContractProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractProducts.
     */
    cursor?: ContractProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProducts.
     */
    skip?: number
    distinct?: ContractProductScalarFieldEnum | ContractProductScalarFieldEnum[]
  }

  /**
   * ContractProduct create
   */
  export type ContractProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractProduct.
     */
    data: XOR<ContractProductCreateInput, ContractProductUncheckedCreateInput>
  }

  /**
   * ContractProduct createMany
   */
  export type ContractProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractProducts.
     */
    data: ContractProductCreateManyInput | ContractProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractProduct createManyAndReturn
   */
  export type ContractProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * The data used to create many ContractProducts.
     */
    data: ContractProductCreateManyInput | ContractProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractProduct update
   */
  export type ContractProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractProduct.
     */
    data: XOR<ContractProductUpdateInput, ContractProductUncheckedUpdateInput>
    /**
     * Choose, which ContractProduct to update.
     */
    where: ContractProductWhereUniqueInput
  }

  /**
   * ContractProduct updateMany
   */
  export type ContractProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractProducts.
     */
    data: XOR<ContractProductUpdateManyMutationInput, ContractProductUncheckedUpdateManyInput>
    /**
     * Filter which ContractProducts to update
     */
    where?: ContractProductWhereInput
    /**
     * Limit how many ContractProducts to update.
     */
    limit?: number
  }

  /**
   * ContractProduct updateManyAndReturn
   */
  export type ContractProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * The data used to update ContractProducts.
     */
    data: XOR<ContractProductUpdateManyMutationInput, ContractProductUncheckedUpdateManyInput>
    /**
     * Filter which ContractProducts to update
     */
    where?: ContractProductWhereInput
    /**
     * Limit how many ContractProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractProduct upsert
   */
  export type ContractProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractProduct to update in case it exists.
     */
    where: ContractProductWhereUniqueInput
    /**
     * In case the ContractProduct found by the `where` argument doesn't exist, create a new ContractProduct with this data.
     */
    create: XOR<ContractProductCreateInput, ContractProductUncheckedCreateInput>
    /**
     * In case the ContractProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractProductUpdateInput, ContractProductUncheckedUpdateInput>
  }

  /**
   * ContractProduct delete
   */
  export type ContractProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
    /**
     * Filter which ContractProduct to delete.
     */
    where: ContractProductWhereUniqueInput
  }

  /**
   * ContractProduct deleteMany
   */
  export type ContractProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractProducts to delete
     */
    where?: ContractProductWhereInput
    /**
     * Limit how many ContractProducts to delete.
     */
    limit?: number
  }

  /**
   * ContractProduct without action
   */
  export type ContractProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProduct
     */
    select?: ContractProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractProduct
     */
    omit?: ContractProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractProductInclude<ExtArgs> | null
  }


  /**
   * Model BrokerageInvoice
   */

  export type AggregateBrokerageInvoice = {
    _count: BrokerageInvoiceCountAggregateOutputType | null
    _avg: BrokerageInvoiceAvgAggregateOutputType | null
    _sum: BrokerageInvoiceSumAggregateOutputType | null
    _min: BrokerageInvoiceMinAggregateOutputType | null
    _max: BrokerageInvoiceMaxAggregateOutputType | null
  }

  export type BrokerageInvoiceAvgAggregateOutputType = {
    id: number | null
    contract_id: number | null
    comission_total_usd: number | null
    comission_total_brl: number | null
    ptax: number | null
  }

  export type BrokerageInvoiceSumAggregateOutputType = {
    id: number | null
    contract_id: number | null
    comission_total_usd: number | null
    comission_total_brl: number | null
    ptax: number | null
  }

  export type BrokerageInvoiceMinAggregateOutputType = {
    id: number | null
    contract_id: number | null
    comission_total_usd: number | null
    comission_total_brl: number | null
    bl_date: Date | null
    bl_number: string | null
    ptax: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type BrokerageInvoiceMaxAggregateOutputType = {
    id: number | null
    contract_id: number | null
    comission_total_usd: number | null
    comission_total_brl: number | null
    bl_date: Date | null
    bl_number: string | null
    ptax: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type BrokerageInvoiceCountAggregateOutputType = {
    id: number
    contract_id: number
    comission_total_usd: number
    comission_total_brl: number
    bl_date: number
    bl_number: number
    bl_attachments: number
    ptax: number
    attachments: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type BrokerageInvoiceAvgAggregateInputType = {
    id?: true
    contract_id?: true
    comission_total_usd?: true
    comission_total_brl?: true
    ptax?: true
  }

  export type BrokerageInvoiceSumAggregateInputType = {
    id?: true
    contract_id?: true
    comission_total_usd?: true
    comission_total_brl?: true
    ptax?: true
  }

  export type BrokerageInvoiceMinAggregateInputType = {
    id?: true
    contract_id?: true
    comission_total_usd?: true
    comission_total_brl?: true
    bl_date?: true
    bl_number?: true
    ptax?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type BrokerageInvoiceMaxAggregateInputType = {
    id?: true
    contract_id?: true
    comission_total_usd?: true
    comission_total_brl?: true
    bl_date?: true
    bl_number?: true
    ptax?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type BrokerageInvoiceCountAggregateInputType = {
    id?: true
    contract_id?: true
    comission_total_usd?: true
    comission_total_brl?: true
    bl_date?: true
    bl_number?: true
    bl_attachments?: true
    ptax?: true
    attachments?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type BrokerageInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrokerageInvoice to aggregate.
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerageInvoices to fetch.
     */
    orderBy?: BrokerageInvoiceOrderByWithRelationInput | BrokerageInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrokerageInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerageInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerageInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrokerageInvoices
    **/
    _count?: true | BrokerageInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrokerageInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrokerageInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrokerageInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrokerageInvoiceMaxAggregateInputType
  }

  export type GetBrokerageInvoiceAggregateType<T extends BrokerageInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBrokerageInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrokerageInvoice[P]>
      : GetScalarType<T[P], AggregateBrokerageInvoice[P]>
  }




  export type BrokerageInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerageInvoiceWhereInput
    orderBy?: BrokerageInvoiceOrderByWithAggregationInput | BrokerageInvoiceOrderByWithAggregationInput[]
    by: BrokerageInvoiceScalarFieldEnum[] | BrokerageInvoiceScalarFieldEnum
    having?: BrokerageInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrokerageInvoiceCountAggregateInputType | true
    _avg?: BrokerageInvoiceAvgAggregateInputType
    _sum?: BrokerageInvoiceSumAggregateInputType
    _min?: BrokerageInvoiceMinAggregateInputType
    _max?: BrokerageInvoiceMaxAggregateInputType
  }

  export type BrokerageInvoiceGroupByOutputType = {
    id: number
    contract_id: number
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date
    bl_number: string
    bl_attachments: string[]
    ptax: number
    attachments: string[]
    createdAt: Date
    active: boolean
    status: string
    _count: BrokerageInvoiceCountAggregateOutputType | null
    _avg: BrokerageInvoiceAvgAggregateOutputType | null
    _sum: BrokerageInvoiceSumAggregateOutputType | null
    _min: BrokerageInvoiceMinAggregateOutputType | null
    _max: BrokerageInvoiceMaxAggregateOutputType | null
  }

  type GetBrokerageInvoiceGroupByPayload<T extends BrokerageInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrokerageInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrokerageInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrokerageInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], BrokerageInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type BrokerageInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contract_id?: boolean
    comission_total_usd?: boolean
    comission_total_brl?: boolean
    bl_date?: boolean
    bl_number?: boolean
    bl_attachments?: boolean
    ptax?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brokerageInvoice"]>

  export type BrokerageInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contract_id?: boolean
    comission_total_usd?: boolean
    comission_total_brl?: boolean
    bl_date?: boolean
    bl_number?: boolean
    bl_attachments?: boolean
    ptax?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brokerageInvoice"]>

  export type BrokerageInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contract_id?: boolean
    comission_total_usd?: boolean
    comission_total_brl?: boolean
    bl_date?: boolean
    bl_number?: boolean
    bl_attachments?: boolean
    ptax?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brokerageInvoice"]>

  export type BrokerageInvoiceSelectScalar = {
    id?: boolean
    contract_id?: boolean
    comission_total_usd?: boolean
    comission_total_brl?: boolean
    bl_date?: boolean
    bl_number?: boolean
    bl_attachments?: boolean
    ptax?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type BrokerageInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contract_id" | "comission_total_usd" | "comission_total_brl" | "bl_date" | "bl_number" | "bl_attachments" | "ptax" | "attachments" | "createdAt" | "active" | "status", ExtArgs["result"]["brokerageInvoice"]>
  export type BrokerageInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type BrokerageInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type BrokerageInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $BrokerageInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrokerageInvoice"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contract_id: number
      comission_total_usd: number
      comission_total_brl: number
      bl_date: Date
      bl_number: string
      bl_attachments: string[]
      ptax: number
      attachments: string[]
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["brokerageInvoice"]>
    composites: {}
  }

  type BrokerageInvoiceGetPayload<S extends boolean | null | undefined | BrokerageInvoiceDefaultArgs> = $Result.GetResult<Prisma.$BrokerageInvoicePayload, S>

  type BrokerageInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrokerageInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrokerageInvoiceCountAggregateInputType | true
    }

  export interface BrokerageInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrokerageInvoice'], meta: { name: 'BrokerageInvoice' } }
    /**
     * Find zero or one BrokerageInvoice that matches the filter.
     * @param {BrokerageInvoiceFindUniqueArgs} args - Arguments to find a BrokerageInvoice
     * @example
     * // Get one BrokerageInvoice
     * const brokerageInvoice = await prisma.brokerageInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrokerageInvoiceFindUniqueArgs>(args: SelectSubset<T, BrokerageInvoiceFindUniqueArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrokerageInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrokerageInvoiceFindUniqueOrThrowArgs} args - Arguments to find a BrokerageInvoice
     * @example
     * // Get one BrokerageInvoice
     * const brokerageInvoice = await prisma.brokerageInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrokerageInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BrokerageInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrokerageInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceFindFirstArgs} args - Arguments to find a BrokerageInvoice
     * @example
     * // Get one BrokerageInvoice
     * const brokerageInvoice = await prisma.brokerageInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrokerageInvoiceFindFirstArgs>(args?: SelectSubset<T, BrokerageInvoiceFindFirstArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrokerageInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceFindFirstOrThrowArgs} args - Arguments to find a BrokerageInvoice
     * @example
     * // Get one BrokerageInvoice
     * const brokerageInvoice = await prisma.brokerageInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrokerageInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BrokerageInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrokerageInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrokerageInvoices
     * const brokerageInvoices = await prisma.brokerageInvoice.findMany()
     * 
     * // Get first 10 BrokerageInvoices
     * const brokerageInvoices = await prisma.brokerageInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brokerageInvoiceWithIdOnly = await prisma.brokerageInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrokerageInvoiceFindManyArgs>(args?: SelectSubset<T, BrokerageInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrokerageInvoice.
     * @param {BrokerageInvoiceCreateArgs} args - Arguments to create a BrokerageInvoice.
     * @example
     * // Create one BrokerageInvoice
     * const BrokerageInvoice = await prisma.brokerageInvoice.create({
     *   data: {
     *     // ... data to create a BrokerageInvoice
     *   }
     * })
     * 
     */
    create<T extends BrokerageInvoiceCreateArgs>(args: SelectSubset<T, BrokerageInvoiceCreateArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrokerageInvoices.
     * @param {BrokerageInvoiceCreateManyArgs} args - Arguments to create many BrokerageInvoices.
     * @example
     * // Create many BrokerageInvoices
     * const brokerageInvoice = await prisma.brokerageInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrokerageInvoiceCreateManyArgs>(args?: SelectSubset<T, BrokerageInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrokerageInvoices and returns the data saved in the database.
     * @param {BrokerageInvoiceCreateManyAndReturnArgs} args - Arguments to create many BrokerageInvoices.
     * @example
     * // Create many BrokerageInvoices
     * const brokerageInvoice = await prisma.brokerageInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrokerageInvoices and only return the `id`
     * const brokerageInvoiceWithIdOnly = await prisma.brokerageInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrokerageInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, BrokerageInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrokerageInvoice.
     * @param {BrokerageInvoiceDeleteArgs} args - Arguments to delete one BrokerageInvoice.
     * @example
     * // Delete one BrokerageInvoice
     * const BrokerageInvoice = await prisma.brokerageInvoice.delete({
     *   where: {
     *     // ... filter to delete one BrokerageInvoice
     *   }
     * })
     * 
     */
    delete<T extends BrokerageInvoiceDeleteArgs>(args: SelectSubset<T, BrokerageInvoiceDeleteArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrokerageInvoice.
     * @param {BrokerageInvoiceUpdateArgs} args - Arguments to update one BrokerageInvoice.
     * @example
     * // Update one BrokerageInvoice
     * const brokerageInvoice = await prisma.brokerageInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrokerageInvoiceUpdateArgs>(args: SelectSubset<T, BrokerageInvoiceUpdateArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrokerageInvoices.
     * @param {BrokerageInvoiceDeleteManyArgs} args - Arguments to filter BrokerageInvoices to delete.
     * @example
     * // Delete a few BrokerageInvoices
     * const { count } = await prisma.brokerageInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrokerageInvoiceDeleteManyArgs>(args?: SelectSubset<T, BrokerageInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrokerageInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrokerageInvoices
     * const brokerageInvoice = await prisma.brokerageInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrokerageInvoiceUpdateManyArgs>(args: SelectSubset<T, BrokerageInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrokerageInvoices and returns the data updated in the database.
     * @param {BrokerageInvoiceUpdateManyAndReturnArgs} args - Arguments to update many BrokerageInvoices.
     * @example
     * // Update many BrokerageInvoices
     * const brokerageInvoice = await prisma.brokerageInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrokerageInvoices and only return the `id`
     * const brokerageInvoiceWithIdOnly = await prisma.brokerageInvoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrokerageInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, BrokerageInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrokerageInvoice.
     * @param {BrokerageInvoiceUpsertArgs} args - Arguments to update or create a BrokerageInvoice.
     * @example
     * // Update or create a BrokerageInvoice
     * const brokerageInvoice = await prisma.brokerageInvoice.upsert({
     *   create: {
     *     // ... data to create a BrokerageInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrokerageInvoice we want to update
     *   }
     * })
     */
    upsert<T extends BrokerageInvoiceUpsertArgs>(args: SelectSubset<T, BrokerageInvoiceUpsertArgs<ExtArgs>>): Prisma__BrokerageInvoiceClient<$Result.GetResult<Prisma.$BrokerageInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrokerageInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceCountArgs} args - Arguments to filter BrokerageInvoices to count.
     * @example
     * // Count the number of BrokerageInvoices
     * const count = await prisma.brokerageInvoice.count({
     *   where: {
     *     // ... the filter for the BrokerageInvoices we want to count
     *   }
     * })
    **/
    count<T extends BrokerageInvoiceCountArgs>(
      args?: Subset<T, BrokerageInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrokerageInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrokerageInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrokerageInvoiceAggregateArgs>(args: Subset<T, BrokerageInvoiceAggregateArgs>): Prisma.PrismaPromise<GetBrokerageInvoiceAggregateType<T>>

    /**
     * Group by BrokerageInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerageInvoiceGroupByArgs} args - Group by arguments.
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
      T extends BrokerageInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrokerageInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: BrokerageInvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrokerageInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrokerageInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrokerageInvoice model
   */
  readonly fields: BrokerageInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrokerageInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrokerageInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrokerageInvoice model
   */
  interface BrokerageInvoiceFieldRefs {
    readonly id: FieldRef<"BrokerageInvoice", 'Int'>
    readonly contract_id: FieldRef<"BrokerageInvoice", 'Int'>
    readonly comission_total_usd: FieldRef<"BrokerageInvoice", 'Float'>
    readonly comission_total_brl: FieldRef<"BrokerageInvoice", 'Float'>
    readonly bl_date: FieldRef<"BrokerageInvoice", 'DateTime'>
    readonly bl_number: FieldRef<"BrokerageInvoice", 'String'>
    readonly bl_attachments: FieldRef<"BrokerageInvoice", 'String[]'>
    readonly ptax: FieldRef<"BrokerageInvoice", 'Float'>
    readonly attachments: FieldRef<"BrokerageInvoice", 'String[]'>
    readonly createdAt: FieldRef<"BrokerageInvoice", 'DateTime'>
    readonly active: FieldRef<"BrokerageInvoice", 'Boolean'>
    readonly status: FieldRef<"BrokerageInvoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BrokerageInvoice findUnique
   */
  export type BrokerageInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BrokerageInvoice to fetch.
     */
    where: BrokerageInvoiceWhereUniqueInput
  }

  /**
   * BrokerageInvoice findUniqueOrThrow
   */
  export type BrokerageInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BrokerageInvoice to fetch.
     */
    where: BrokerageInvoiceWhereUniqueInput
  }

  /**
   * BrokerageInvoice findFirst
   */
  export type BrokerageInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BrokerageInvoice to fetch.
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerageInvoices to fetch.
     */
    orderBy?: BrokerageInvoiceOrderByWithRelationInput | BrokerageInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrokerageInvoices.
     */
    cursor?: BrokerageInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerageInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerageInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrokerageInvoices.
     */
    distinct?: BrokerageInvoiceScalarFieldEnum | BrokerageInvoiceScalarFieldEnum[]
  }

  /**
   * BrokerageInvoice findFirstOrThrow
   */
  export type BrokerageInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BrokerageInvoice to fetch.
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerageInvoices to fetch.
     */
    orderBy?: BrokerageInvoiceOrderByWithRelationInput | BrokerageInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrokerageInvoices.
     */
    cursor?: BrokerageInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerageInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerageInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrokerageInvoices.
     */
    distinct?: BrokerageInvoiceScalarFieldEnum | BrokerageInvoiceScalarFieldEnum[]
  }

  /**
   * BrokerageInvoice findMany
   */
  export type BrokerageInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which BrokerageInvoices to fetch.
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrokerageInvoices to fetch.
     */
    orderBy?: BrokerageInvoiceOrderByWithRelationInput | BrokerageInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrokerageInvoices.
     */
    cursor?: BrokerageInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrokerageInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrokerageInvoices.
     */
    skip?: number
    distinct?: BrokerageInvoiceScalarFieldEnum | BrokerageInvoiceScalarFieldEnum[]
  }

  /**
   * BrokerageInvoice create
   */
  export type BrokerageInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BrokerageInvoice.
     */
    data: XOR<BrokerageInvoiceCreateInput, BrokerageInvoiceUncheckedCreateInput>
  }

  /**
   * BrokerageInvoice createMany
   */
  export type BrokerageInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrokerageInvoices.
     */
    data: BrokerageInvoiceCreateManyInput | BrokerageInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrokerageInvoice createManyAndReturn
   */
  export type BrokerageInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many BrokerageInvoices.
     */
    data: BrokerageInvoiceCreateManyInput | BrokerageInvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrokerageInvoice update
   */
  export type BrokerageInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BrokerageInvoice.
     */
    data: XOR<BrokerageInvoiceUpdateInput, BrokerageInvoiceUncheckedUpdateInput>
    /**
     * Choose, which BrokerageInvoice to update.
     */
    where: BrokerageInvoiceWhereUniqueInput
  }

  /**
   * BrokerageInvoice updateMany
   */
  export type BrokerageInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrokerageInvoices.
     */
    data: XOR<BrokerageInvoiceUpdateManyMutationInput, BrokerageInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which BrokerageInvoices to update
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * Limit how many BrokerageInvoices to update.
     */
    limit?: number
  }

  /**
   * BrokerageInvoice updateManyAndReturn
   */
  export type BrokerageInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update BrokerageInvoices.
     */
    data: XOR<BrokerageInvoiceUpdateManyMutationInput, BrokerageInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which BrokerageInvoices to update
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * Limit how many BrokerageInvoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrokerageInvoice upsert
   */
  export type BrokerageInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BrokerageInvoice to update in case it exists.
     */
    where: BrokerageInvoiceWhereUniqueInput
    /**
     * In case the BrokerageInvoice found by the `where` argument doesn't exist, create a new BrokerageInvoice with this data.
     */
    create: XOR<BrokerageInvoiceCreateInput, BrokerageInvoiceUncheckedCreateInput>
    /**
     * In case the BrokerageInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrokerageInvoiceUpdateInput, BrokerageInvoiceUncheckedUpdateInput>
  }

  /**
   * BrokerageInvoice delete
   */
  export type BrokerageInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
    /**
     * Filter which BrokerageInvoice to delete.
     */
    where: BrokerageInvoiceWhereUniqueInput
  }

  /**
   * BrokerageInvoice deleteMany
   */
  export type BrokerageInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrokerageInvoices to delete
     */
    where?: BrokerageInvoiceWhereInput
    /**
     * Limit how many BrokerageInvoices to delete.
     */
    limit?: number
  }

  /**
   * BrokerageInvoice without action
   */
  export type BrokerageInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerageInvoice
     */
    select?: BrokerageInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrokerageInvoice
     */
    omit?: BrokerageInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerageInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model ArbitrationRule
   */

  export type AggregateArbitrationRule = {
    _count: ArbitrationRuleCountAggregateOutputType | null
    _avg: ArbitrationRuleAvgAggregateOutputType | null
    _sum: ArbitrationRuleSumAggregateOutputType | null
    _min: ArbitrationRuleMinAggregateOutputType | null
    _max: ArbitrationRuleMaxAggregateOutputType | null
  }

  export type ArbitrationRuleAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ArbitrationRuleSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ArbitrationRuleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    order: number | null
    type: string | null
    note: string | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ArbitrationRuleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    order: number | null
    type: string | null
    note: string | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type ArbitrationRuleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    order: number
    type: number
    note: number
    attachments: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type ArbitrationRuleAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ArbitrationRuleSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ArbitrationRuleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    type?: true
    note?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ArbitrationRuleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    type?: true
    note?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type ArbitrationRuleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    type?: true
    note?: true
    attachments?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type ArbitrationRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArbitrationRule to aggregate.
     */
    where?: ArbitrationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbitrationRules to fetch.
     */
    orderBy?: ArbitrationRuleOrderByWithRelationInput | ArbitrationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArbitrationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbitrationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbitrationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArbitrationRules
    **/
    _count?: true | ArbitrationRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArbitrationRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArbitrationRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArbitrationRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArbitrationRuleMaxAggregateInputType
  }

  export type GetArbitrationRuleAggregateType<T extends ArbitrationRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateArbitrationRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArbitrationRule[P]>
      : GetScalarType<T[P], AggregateArbitrationRule[P]>
  }




  export type ArbitrationRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitrationRuleWhereInput
    orderBy?: ArbitrationRuleOrderByWithAggregationInput | ArbitrationRuleOrderByWithAggregationInput[]
    by: ArbitrationRuleScalarFieldEnum[] | ArbitrationRuleScalarFieldEnum
    having?: ArbitrationRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArbitrationRuleCountAggregateInputType | true
    _avg?: ArbitrationRuleAvgAggregateInputType
    _sum?: ArbitrationRuleSumAggregateInputType
    _min?: ArbitrationRuleMinAggregateInputType
    _max?: ArbitrationRuleMaxAggregateInputType
  }

  export type ArbitrationRuleGroupByOutputType = {
    id: number
    name: string
    description: string
    order: number
    type: string
    note: string
    attachments: string[]
    createdAt: Date
    active: boolean
    status: string
    _count: ArbitrationRuleCountAggregateOutputType | null
    _avg: ArbitrationRuleAvgAggregateOutputType | null
    _sum: ArbitrationRuleSumAggregateOutputType | null
    _min: ArbitrationRuleMinAggregateOutputType | null
    _max: ArbitrationRuleMaxAggregateOutputType | null
  }

  type GetArbitrationRuleGroupByPayload<T extends ArbitrationRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArbitrationRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArbitrationRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArbitrationRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ArbitrationRuleGroupByOutputType[P]>
        }
      >
    >


  export type ArbitrationRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contracts?: boolean | ArbitrationRule$contractsArgs<ExtArgs>
    _count?: boolean | ArbitrationRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arbitrationRule"]>

  export type ArbitrationRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["arbitrationRule"]>

  export type ArbitrationRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["arbitrationRule"]>

  export type ArbitrationRuleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type ArbitrationRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "order" | "type" | "note" | "attachments" | "createdAt" | "active" | "status", ExtArgs["result"]["arbitrationRule"]>
  export type ArbitrationRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | ArbitrationRule$contractsArgs<ExtArgs>
    _count?: boolean | ArbitrationRuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArbitrationRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArbitrationRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArbitrationRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArbitrationRule"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      order: number
      type: string
      note: string
      attachments: string[]
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["arbitrationRule"]>
    composites: {}
  }

  type ArbitrationRuleGetPayload<S extends boolean | null | undefined | ArbitrationRuleDefaultArgs> = $Result.GetResult<Prisma.$ArbitrationRulePayload, S>

  type ArbitrationRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArbitrationRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArbitrationRuleCountAggregateInputType | true
    }

  export interface ArbitrationRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArbitrationRule'], meta: { name: 'ArbitrationRule' } }
    /**
     * Find zero or one ArbitrationRule that matches the filter.
     * @param {ArbitrationRuleFindUniqueArgs} args - Arguments to find a ArbitrationRule
     * @example
     * // Get one ArbitrationRule
     * const arbitrationRule = await prisma.arbitrationRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArbitrationRuleFindUniqueArgs>(args: SelectSubset<T, ArbitrationRuleFindUniqueArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArbitrationRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArbitrationRuleFindUniqueOrThrowArgs} args - Arguments to find a ArbitrationRule
     * @example
     * // Get one ArbitrationRule
     * const arbitrationRule = await prisma.arbitrationRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArbitrationRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArbitrationRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArbitrationRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleFindFirstArgs} args - Arguments to find a ArbitrationRule
     * @example
     * // Get one ArbitrationRule
     * const arbitrationRule = await prisma.arbitrationRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArbitrationRuleFindFirstArgs>(args?: SelectSubset<T, ArbitrationRuleFindFirstArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArbitrationRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleFindFirstOrThrowArgs} args - Arguments to find a ArbitrationRule
     * @example
     * // Get one ArbitrationRule
     * const arbitrationRule = await prisma.arbitrationRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArbitrationRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArbitrationRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArbitrationRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArbitrationRules
     * const arbitrationRules = await prisma.arbitrationRule.findMany()
     * 
     * // Get first 10 ArbitrationRules
     * const arbitrationRules = await prisma.arbitrationRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arbitrationRuleWithIdOnly = await prisma.arbitrationRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArbitrationRuleFindManyArgs>(args?: SelectSubset<T, ArbitrationRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArbitrationRule.
     * @param {ArbitrationRuleCreateArgs} args - Arguments to create a ArbitrationRule.
     * @example
     * // Create one ArbitrationRule
     * const ArbitrationRule = await prisma.arbitrationRule.create({
     *   data: {
     *     // ... data to create a ArbitrationRule
     *   }
     * })
     * 
     */
    create<T extends ArbitrationRuleCreateArgs>(args: SelectSubset<T, ArbitrationRuleCreateArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArbitrationRules.
     * @param {ArbitrationRuleCreateManyArgs} args - Arguments to create many ArbitrationRules.
     * @example
     * // Create many ArbitrationRules
     * const arbitrationRule = await prisma.arbitrationRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArbitrationRuleCreateManyArgs>(args?: SelectSubset<T, ArbitrationRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArbitrationRules and returns the data saved in the database.
     * @param {ArbitrationRuleCreateManyAndReturnArgs} args - Arguments to create many ArbitrationRules.
     * @example
     * // Create many ArbitrationRules
     * const arbitrationRule = await prisma.arbitrationRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArbitrationRules and only return the `id`
     * const arbitrationRuleWithIdOnly = await prisma.arbitrationRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArbitrationRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArbitrationRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArbitrationRule.
     * @param {ArbitrationRuleDeleteArgs} args - Arguments to delete one ArbitrationRule.
     * @example
     * // Delete one ArbitrationRule
     * const ArbitrationRule = await prisma.arbitrationRule.delete({
     *   where: {
     *     // ... filter to delete one ArbitrationRule
     *   }
     * })
     * 
     */
    delete<T extends ArbitrationRuleDeleteArgs>(args: SelectSubset<T, ArbitrationRuleDeleteArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArbitrationRule.
     * @param {ArbitrationRuleUpdateArgs} args - Arguments to update one ArbitrationRule.
     * @example
     * // Update one ArbitrationRule
     * const arbitrationRule = await prisma.arbitrationRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArbitrationRuleUpdateArgs>(args: SelectSubset<T, ArbitrationRuleUpdateArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArbitrationRules.
     * @param {ArbitrationRuleDeleteManyArgs} args - Arguments to filter ArbitrationRules to delete.
     * @example
     * // Delete a few ArbitrationRules
     * const { count } = await prisma.arbitrationRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArbitrationRuleDeleteManyArgs>(args?: SelectSubset<T, ArbitrationRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArbitrationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArbitrationRules
     * const arbitrationRule = await prisma.arbitrationRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArbitrationRuleUpdateManyArgs>(args: SelectSubset<T, ArbitrationRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArbitrationRules and returns the data updated in the database.
     * @param {ArbitrationRuleUpdateManyAndReturnArgs} args - Arguments to update many ArbitrationRules.
     * @example
     * // Update many ArbitrationRules
     * const arbitrationRule = await prisma.arbitrationRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArbitrationRules and only return the `id`
     * const arbitrationRuleWithIdOnly = await prisma.arbitrationRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArbitrationRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArbitrationRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArbitrationRule.
     * @param {ArbitrationRuleUpsertArgs} args - Arguments to update or create a ArbitrationRule.
     * @example
     * // Update or create a ArbitrationRule
     * const arbitrationRule = await prisma.arbitrationRule.upsert({
     *   create: {
     *     // ... data to create a ArbitrationRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArbitrationRule we want to update
     *   }
     * })
     */
    upsert<T extends ArbitrationRuleUpsertArgs>(args: SelectSubset<T, ArbitrationRuleUpsertArgs<ExtArgs>>): Prisma__ArbitrationRuleClient<$Result.GetResult<Prisma.$ArbitrationRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArbitrationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleCountArgs} args - Arguments to filter ArbitrationRules to count.
     * @example
     * // Count the number of ArbitrationRules
     * const count = await prisma.arbitrationRule.count({
     *   where: {
     *     // ... the filter for the ArbitrationRules we want to count
     *   }
     * })
    **/
    count<T extends ArbitrationRuleCountArgs>(
      args?: Subset<T, ArbitrationRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArbitrationRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArbitrationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArbitrationRuleAggregateArgs>(args: Subset<T, ArbitrationRuleAggregateArgs>): Prisma.PrismaPromise<GetArbitrationRuleAggregateType<T>>

    /**
     * Group by ArbitrationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitrationRuleGroupByArgs} args - Group by arguments.
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
      T extends ArbitrationRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArbitrationRuleGroupByArgs['orderBy'] }
        : { orderBy?: ArbitrationRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArbitrationRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArbitrationRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArbitrationRule model
   */
  readonly fields: ArbitrationRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArbitrationRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArbitrationRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends ArbitrationRule$contractsArgs<ExtArgs> = {}>(args?: Subset<T, ArbitrationRule$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArbitrationRule model
   */
  interface ArbitrationRuleFieldRefs {
    readonly id: FieldRef<"ArbitrationRule", 'Int'>
    readonly name: FieldRef<"ArbitrationRule", 'String'>
    readonly description: FieldRef<"ArbitrationRule", 'String'>
    readonly order: FieldRef<"ArbitrationRule", 'Int'>
    readonly type: FieldRef<"ArbitrationRule", 'String'>
    readonly note: FieldRef<"ArbitrationRule", 'String'>
    readonly attachments: FieldRef<"ArbitrationRule", 'String[]'>
    readonly createdAt: FieldRef<"ArbitrationRule", 'DateTime'>
    readonly active: FieldRef<"ArbitrationRule", 'Boolean'>
    readonly status: FieldRef<"ArbitrationRule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArbitrationRule findUnique
   */
  export type ArbitrationRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * Filter, which ArbitrationRule to fetch.
     */
    where: ArbitrationRuleWhereUniqueInput
  }

  /**
   * ArbitrationRule findUniqueOrThrow
   */
  export type ArbitrationRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * Filter, which ArbitrationRule to fetch.
     */
    where: ArbitrationRuleWhereUniqueInput
  }

  /**
   * ArbitrationRule findFirst
   */
  export type ArbitrationRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * Filter, which ArbitrationRule to fetch.
     */
    where?: ArbitrationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbitrationRules to fetch.
     */
    orderBy?: ArbitrationRuleOrderByWithRelationInput | ArbitrationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArbitrationRules.
     */
    cursor?: ArbitrationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbitrationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbitrationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbitrationRules.
     */
    distinct?: ArbitrationRuleScalarFieldEnum | ArbitrationRuleScalarFieldEnum[]
  }

  /**
   * ArbitrationRule findFirstOrThrow
   */
  export type ArbitrationRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * Filter, which ArbitrationRule to fetch.
     */
    where?: ArbitrationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbitrationRules to fetch.
     */
    orderBy?: ArbitrationRuleOrderByWithRelationInput | ArbitrationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArbitrationRules.
     */
    cursor?: ArbitrationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbitrationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbitrationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbitrationRules.
     */
    distinct?: ArbitrationRuleScalarFieldEnum | ArbitrationRuleScalarFieldEnum[]
  }

  /**
   * ArbitrationRule findMany
   */
  export type ArbitrationRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * Filter, which ArbitrationRules to fetch.
     */
    where?: ArbitrationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbitrationRules to fetch.
     */
    orderBy?: ArbitrationRuleOrderByWithRelationInput | ArbitrationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArbitrationRules.
     */
    cursor?: ArbitrationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbitrationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbitrationRules.
     */
    skip?: number
    distinct?: ArbitrationRuleScalarFieldEnum | ArbitrationRuleScalarFieldEnum[]
  }

  /**
   * ArbitrationRule create
   */
  export type ArbitrationRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ArbitrationRule.
     */
    data: XOR<ArbitrationRuleCreateInput, ArbitrationRuleUncheckedCreateInput>
  }

  /**
   * ArbitrationRule createMany
   */
  export type ArbitrationRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArbitrationRules.
     */
    data: ArbitrationRuleCreateManyInput | ArbitrationRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArbitrationRule createManyAndReturn
   */
  export type ArbitrationRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ArbitrationRules.
     */
    data: ArbitrationRuleCreateManyInput | ArbitrationRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArbitrationRule update
   */
  export type ArbitrationRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ArbitrationRule.
     */
    data: XOR<ArbitrationRuleUpdateInput, ArbitrationRuleUncheckedUpdateInput>
    /**
     * Choose, which ArbitrationRule to update.
     */
    where: ArbitrationRuleWhereUniqueInput
  }

  /**
   * ArbitrationRule updateMany
   */
  export type ArbitrationRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArbitrationRules.
     */
    data: XOR<ArbitrationRuleUpdateManyMutationInput, ArbitrationRuleUncheckedUpdateManyInput>
    /**
     * Filter which ArbitrationRules to update
     */
    where?: ArbitrationRuleWhereInput
    /**
     * Limit how many ArbitrationRules to update.
     */
    limit?: number
  }

  /**
   * ArbitrationRule updateManyAndReturn
   */
  export type ArbitrationRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * The data used to update ArbitrationRules.
     */
    data: XOR<ArbitrationRuleUpdateManyMutationInput, ArbitrationRuleUncheckedUpdateManyInput>
    /**
     * Filter which ArbitrationRules to update
     */
    where?: ArbitrationRuleWhereInput
    /**
     * Limit how many ArbitrationRules to update.
     */
    limit?: number
  }

  /**
   * ArbitrationRule upsert
   */
  export type ArbitrationRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ArbitrationRule to update in case it exists.
     */
    where: ArbitrationRuleWhereUniqueInput
    /**
     * In case the ArbitrationRule found by the `where` argument doesn't exist, create a new ArbitrationRule with this data.
     */
    create: XOR<ArbitrationRuleCreateInput, ArbitrationRuleUncheckedCreateInput>
    /**
     * In case the ArbitrationRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArbitrationRuleUpdateInput, ArbitrationRuleUncheckedUpdateInput>
  }

  /**
   * ArbitrationRule delete
   */
  export type ArbitrationRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
    /**
     * Filter which ArbitrationRule to delete.
     */
    where: ArbitrationRuleWhereUniqueInput
  }

  /**
   * ArbitrationRule deleteMany
   */
  export type ArbitrationRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArbitrationRules to delete
     */
    where?: ArbitrationRuleWhereInput
    /**
     * Limit how many ArbitrationRules to delete.
     */
    limit?: number
  }

  /**
   * ArbitrationRule.contracts
   */
  export type ArbitrationRule$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * ArbitrationRule without action
   */
  export type ArbitrationRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrationRule
     */
    select?: ArbitrationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbitrationRule
     */
    omit?: ArbitrationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArbitrationRuleInclude<ExtArgs> | null
  }


  /**
   * Model SpecialCondition
   */

  export type AggregateSpecialCondition = {
    _count: SpecialConditionCountAggregateOutputType | null
    _avg: SpecialConditionAvgAggregateOutputType | null
    _sum: SpecialConditionSumAggregateOutputType | null
    _min: SpecialConditionMinAggregateOutputType | null
    _max: SpecialConditionMaxAggregateOutputType | null
  }

  export type SpecialConditionAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type SpecialConditionSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type SpecialConditionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    note: string | null
    order: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type SpecialConditionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    note: string | null
    order: number | null
    createdAt: Date | null
    active: boolean | null
    status: string | null
  }

  export type SpecialConditionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    tags: number
    type: number
    note: number
    attachments: number
    order: number
    createdAt: number
    active: number
    status: number
    _all: number
  }


  export type SpecialConditionAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type SpecialConditionSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type SpecialConditionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    note?: true
    order?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type SpecialConditionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    note?: true
    order?: true
    createdAt?: true
    active?: true
    status?: true
  }

  export type SpecialConditionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tags?: true
    type?: true
    note?: true
    attachments?: true
    order?: true
    createdAt?: true
    active?: true
    status?: true
    _all?: true
  }

  export type SpecialConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialCondition to aggregate.
     */
    where?: SpecialConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialConditions to fetch.
     */
    orderBy?: SpecialConditionOrderByWithRelationInput | SpecialConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialConditions
    **/
    _count?: true | SpecialConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialConditionMaxAggregateInputType
  }

  export type GetSpecialConditionAggregateType<T extends SpecialConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialCondition[P]>
      : GetScalarType<T[P], AggregateSpecialCondition[P]>
  }




  export type SpecialConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialConditionWhereInput
    orderBy?: SpecialConditionOrderByWithAggregationInput | SpecialConditionOrderByWithAggregationInput[]
    by: SpecialConditionScalarFieldEnum[] | SpecialConditionScalarFieldEnum
    having?: SpecialConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialConditionCountAggregateInputType | true
    _avg?: SpecialConditionAvgAggregateInputType
    _sum?: SpecialConditionSumAggregateInputType
    _min?: SpecialConditionMinAggregateInputType
    _max?: SpecialConditionMaxAggregateInputType
  }

  export type SpecialConditionGroupByOutputType = {
    id: number
    name: string
    description: string
    tags: string[]
    type: string
    note: string
    attachments: string[]
    order: number
    createdAt: Date
    active: boolean
    status: string
    _count: SpecialConditionCountAggregateOutputType | null
    _avg: SpecialConditionAvgAggregateOutputType | null
    _sum: SpecialConditionSumAggregateOutputType | null
    _min: SpecialConditionMinAggregateOutputType | null
    _max: SpecialConditionMaxAggregateOutputType | null
  }

  type GetSpecialConditionGroupByPayload<T extends SpecialConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialConditionGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialConditionGroupByOutputType[P]>
        }
      >
    >


  export type SpecialConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    order?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
    contracts?: boolean | SpecialCondition$contractsArgs<ExtArgs>
    _count?: boolean | SpecialConditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialCondition"]>

  export type SpecialConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    order?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["specialCondition"]>

  export type SpecialConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    order?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }, ExtArgs["result"]["specialCondition"]>

  export type SpecialConditionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    type?: boolean
    note?: boolean
    attachments?: boolean
    order?: boolean
    createdAt?: boolean
    active?: boolean
    status?: boolean
  }

  export type SpecialConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "tags" | "type" | "note" | "attachments" | "order" | "createdAt" | "active" | "status", ExtArgs["result"]["specialCondition"]>
  export type SpecialConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | SpecialCondition$contractsArgs<ExtArgs>
    _count?: boolean | SpecialConditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialCondition"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      tags: string[]
      type: string
      note: string
      attachments: string[]
      order: number
      createdAt: Date
      active: boolean
      status: string
    }, ExtArgs["result"]["specialCondition"]>
    composites: {}
  }

  type SpecialConditionGetPayload<S extends boolean | null | undefined | SpecialConditionDefaultArgs> = $Result.GetResult<Prisma.$SpecialConditionPayload, S>

  type SpecialConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialConditionCountAggregateInputType | true
    }

  export interface SpecialConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialCondition'], meta: { name: 'SpecialCondition' } }
    /**
     * Find zero or one SpecialCondition that matches the filter.
     * @param {SpecialConditionFindUniqueArgs} args - Arguments to find a SpecialCondition
     * @example
     * // Get one SpecialCondition
     * const specialCondition = await prisma.specialCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialConditionFindUniqueArgs>(args: SelectSubset<T, SpecialConditionFindUniqueArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialConditionFindUniqueOrThrowArgs} args - Arguments to find a SpecialCondition
     * @example
     * // Get one SpecialCondition
     * const specialCondition = await prisma.specialCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionFindFirstArgs} args - Arguments to find a SpecialCondition
     * @example
     * // Get one SpecialCondition
     * const specialCondition = await prisma.specialCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialConditionFindFirstArgs>(args?: SelectSubset<T, SpecialConditionFindFirstArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionFindFirstOrThrowArgs} args - Arguments to find a SpecialCondition
     * @example
     * // Get one SpecialCondition
     * const specialCondition = await prisma.specialCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialConditions
     * const specialConditions = await prisma.specialCondition.findMany()
     * 
     * // Get first 10 SpecialConditions
     * const specialConditions = await prisma.specialCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialConditionWithIdOnly = await prisma.specialCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialConditionFindManyArgs>(args?: SelectSubset<T, SpecialConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialCondition.
     * @param {SpecialConditionCreateArgs} args - Arguments to create a SpecialCondition.
     * @example
     * // Create one SpecialCondition
     * const SpecialCondition = await prisma.specialCondition.create({
     *   data: {
     *     // ... data to create a SpecialCondition
     *   }
     * })
     * 
     */
    create<T extends SpecialConditionCreateArgs>(args: SelectSubset<T, SpecialConditionCreateArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialConditions.
     * @param {SpecialConditionCreateManyArgs} args - Arguments to create many SpecialConditions.
     * @example
     * // Create many SpecialConditions
     * const specialCondition = await prisma.specialCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialConditionCreateManyArgs>(args?: SelectSubset<T, SpecialConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialConditions and returns the data saved in the database.
     * @param {SpecialConditionCreateManyAndReturnArgs} args - Arguments to create many SpecialConditions.
     * @example
     * // Create many SpecialConditions
     * const specialCondition = await prisma.specialCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialConditions and only return the `id`
     * const specialConditionWithIdOnly = await prisma.specialCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialCondition.
     * @param {SpecialConditionDeleteArgs} args - Arguments to delete one SpecialCondition.
     * @example
     * // Delete one SpecialCondition
     * const SpecialCondition = await prisma.specialCondition.delete({
     *   where: {
     *     // ... filter to delete one SpecialCondition
     *   }
     * })
     * 
     */
    delete<T extends SpecialConditionDeleteArgs>(args: SelectSubset<T, SpecialConditionDeleteArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialCondition.
     * @param {SpecialConditionUpdateArgs} args - Arguments to update one SpecialCondition.
     * @example
     * // Update one SpecialCondition
     * const specialCondition = await prisma.specialCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialConditionUpdateArgs>(args: SelectSubset<T, SpecialConditionUpdateArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialConditions.
     * @param {SpecialConditionDeleteManyArgs} args - Arguments to filter SpecialConditions to delete.
     * @example
     * // Delete a few SpecialConditions
     * const { count } = await prisma.specialCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialConditionDeleteManyArgs>(args?: SelectSubset<T, SpecialConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialConditions
     * const specialCondition = await prisma.specialCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialConditionUpdateManyArgs>(args: SelectSubset<T, SpecialConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialConditions and returns the data updated in the database.
     * @param {SpecialConditionUpdateManyAndReturnArgs} args - Arguments to update many SpecialConditions.
     * @example
     * // Update many SpecialConditions
     * const specialCondition = await prisma.specialCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialConditions and only return the `id`
     * const specialConditionWithIdOnly = await prisma.specialCondition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialCondition.
     * @param {SpecialConditionUpsertArgs} args - Arguments to update or create a SpecialCondition.
     * @example
     * // Update or create a SpecialCondition
     * const specialCondition = await prisma.specialCondition.upsert({
     *   create: {
     *     // ... data to create a SpecialCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialCondition we want to update
     *   }
     * })
     */
    upsert<T extends SpecialConditionUpsertArgs>(args: SelectSubset<T, SpecialConditionUpsertArgs<ExtArgs>>): Prisma__SpecialConditionClient<$Result.GetResult<Prisma.$SpecialConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionCountArgs} args - Arguments to filter SpecialConditions to count.
     * @example
     * // Count the number of SpecialConditions
     * const count = await prisma.specialCondition.count({
     *   where: {
     *     // ... the filter for the SpecialConditions we want to count
     *   }
     * })
    **/
    count<T extends SpecialConditionCountArgs>(
      args?: Subset<T, SpecialConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialConditionAggregateArgs>(args: Subset<T, SpecialConditionAggregateArgs>): Prisma.PrismaPromise<GetSpecialConditionAggregateType<T>>

    /**
     * Group by SpecialCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialConditionGroupByArgs} args - Group by arguments.
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
      T extends SpecialConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialConditionGroupByArgs['orderBy'] }
        : { orderBy?: SpecialConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialCondition model
   */
  readonly fields: SpecialConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends SpecialCondition$contractsArgs<ExtArgs> = {}>(args?: Subset<T, SpecialCondition$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SpecialCondition model
   */
  interface SpecialConditionFieldRefs {
    readonly id: FieldRef<"SpecialCondition", 'Int'>
    readonly name: FieldRef<"SpecialCondition", 'String'>
    readonly description: FieldRef<"SpecialCondition", 'String'>
    readonly tags: FieldRef<"SpecialCondition", 'String[]'>
    readonly type: FieldRef<"SpecialCondition", 'String'>
    readonly note: FieldRef<"SpecialCondition", 'String'>
    readonly attachments: FieldRef<"SpecialCondition", 'String[]'>
    readonly order: FieldRef<"SpecialCondition", 'Int'>
    readonly createdAt: FieldRef<"SpecialCondition", 'DateTime'>
    readonly active: FieldRef<"SpecialCondition", 'Boolean'>
    readonly status: FieldRef<"SpecialCondition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SpecialCondition findUnique
   */
  export type SpecialConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * Filter, which SpecialCondition to fetch.
     */
    where: SpecialConditionWhereUniqueInput
  }

  /**
   * SpecialCondition findUniqueOrThrow
   */
  export type SpecialConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * Filter, which SpecialCondition to fetch.
     */
    where: SpecialConditionWhereUniqueInput
  }

  /**
   * SpecialCondition findFirst
   */
  export type SpecialConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * Filter, which SpecialCondition to fetch.
     */
    where?: SpecialConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialConditions to fetch.
     */
    orderBy?: SpecialConditionOrderByWithRelationInput | SpecialConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialConditions.
     */
    cursor?: SpecialConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialConditions.
     */
    distinct?: SpecialConditionScalarFieldEnum | SpecialConditionScalarFieldEnum[]
  }

  /**
   * SpecialCondition findFirstOrThrow
   */
  export type SpecialConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * Filter, which SpecialCondition to fetch.
     */
    where?: SpecialConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialConditions to fetch.
     */
    orderBy?: SpecialConditionOrderByWithRelationInput | SpecialConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialConditions.
     */
    cursor?: SpecialConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialConditions.
     */
    distinct?: SpecialConditionScalarFieldEnum | SpecialConditionScalarFieldEnum[]
  }

  /**
   * SpecialCondition findMany
   */
  export type SpecialConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * Filter, which SpecialConditions to fetch.
     */
    where?: SpecialConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialConditions to fetch.
     */
    orderBy?: SpecialConditionOrderByWithRelationInput | SpecialConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialConditions.
     */
    cursor?: SpecialConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialConditions.
     */
    skip?: number
    distinct?: SpecialConditionScalarFieldEnum | SpecialConditionScalarFieldEnum[]
  }

  /**
   * SpecialCondition create
   */
  export type SpecialConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialCondition.
     */
    data: XOR<SpecialConditionCreateInput, SpecialConditionUncheckedCreateInput>
  }

  /**
   * SpecialCondition createMany
   */
  export type SpecialConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialConditions.
     */
    data: SpecialConditionCreateManyInput | SpecialConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialCondition createManyAndReturn
   */
  export type SpecialConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialConditions.
     */
    data: SpecialConditionCreateManyInput | SpecialConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialCondition update
   */
  export type SpecialConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialCondition.
     */
    data: XOR<SpecialConditionUpdateInput, SpecialConditionUncheckedUpdateInput>
    /**
     * Choose, which SpecialCondition to update.
     */
    where: SpecialConditionWhereUniqueInput
  }

  /**
   * SpecialCondition updateMany
   */
  export type SpecialConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialConditions.
     */
    data: XOR<SpecialConditionUpdateManyMutationInput, SpecialConditionUncheckedUpdateManyInput>
    /**
     * Filter which SpecialConditions to update
     */
    where?: SpecialConditionWhereInput
    /**
     * Limit how many SpecialConditions to update.
     */
    limit?: number
  }

  /**
   * SpecialCondition updateManyAndReturn
   */
  export type SpecialConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * The data used to update SpecialConditions.
     */
    data: XOR<SpecialConditionUpdateManyMutationInput, SpecialConditionUncheckedUpdateManyInput>
    /**
     * Filter which SpecialConditions to update
     */
    where?: SpecialConditionWhereInput
    /**
     * Limit how many SpecialConditions to update.
     */
    limit?: number
  }

  /**
   * SpecialCondition upsert
   */
  export type SpecialConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialCondition to update in case it exists.
     */
    where: SpecialConditionWhereUniqueInput
    /**
     * In case the SpecialCondition found by the `where` argument doesn't exist, create a new SpecialCondition with this data.
     */
    create: XOR<SpecialConditionCreateInput, SpecialConditionUncheckedCreateInput>
    /**
     * In case the SpecialCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialConditionUpdateInput, SpecialConditionUncheckedUpdateInput>
  }

  /**
   * SpecialCondition delete
   */
  export type SpecialConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
    /**
     * Filter which SpecialCondition to delete.
     */
    where: SpecialConditionWhereUniqueInput
  }

  /**
   * SpecialCondition deleteMany
   */
  export type SpecialConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialConditions to delete
     */
    where?: SpecialConditionWhereInput
    /**
     * Limit how many SpecialConditions to delete.
     */
    limit?: number
  }

  /**
   * SpecialCondition.contracts
   */
  export type SpecialCondition$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * SpecialCondition without action
   */
  export type SpecialConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCondition
     */
    select?: SpecialConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialCondition
     */
    omit?: SpecialConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialConditionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    comercial_name: 'comercial_name',
    category: 'category',
    origin_country: 'origin_country',
    price_comercial: 'price_comercial',
    price_local: 'price_local',
    currency: 'currency',
    comission: 'comission',
    incoterm: 'incoterm',
    regulator_organ_number: 'regulator_organ_number',
    sanity_rules: 'sanity_rules',
    pack_type: 'pack_type',
    quantity_per_pack: 'quantity_per_pack',
    quantity_per_container: 'quantity_per_container',
    container_type: 'container_type',
    country_from: 'country_from',
    supply_origin_country: 'supply_origin_country',
    port_origin: 'port_origin',
    port_destination: 'port_destination',
    documents_required: 'documents_required',
    record_owner: 'record_owner',
    observation: 'observation',
    attached_files: 'attached_files',
    sellersId: 'sellersId',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SellerScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    full_address: 'full_address',
    country: 'country',
    tax_id: 'tax_id',
    contact_name: 'contact_name',
    whatsapp: 'whatsapp',
    phone: 'phone',
    email: 'email',
    website: 'website',
    note: 'note',
    description: 'description',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    full_name: 'full_name',
    full_address: 'full_address',
    country: 'country',
    tax_id: 'tax_id',
    contact_name: 'contact_name',
    whatsapp: 'whatsapp',
    phone: 'phone',
    email: 'email',
    website: 'website',
    note: 'note',
    description: 'description',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    date_creation: 'date_creation',
    date_expiration: 'date_expiration',
    date_signature: 'date_signature',
    date_expiration_signature: 'date_expiration_signature',
    date_signature_customer: 'date_signature_customer',
    date_expiration_signature_customer: 'date_expiration_signature_customer',
    date_signature_seller: 'date_signature_seller',
    date_expiration_signature_seller: 'date_expiration_signature_seller',
    customer_id: 'customer_id',
    seller_id: 'seller_id',
    products_id: 'products_id',
    bording_date: 'bording_date',
    mt_value: 'mt_value',
    destination_country: 'destination_country',
    destination_port: 'destination_port',
    shipping_company: 'shipping_company',
    shipment_date: 'shipment_date',
    si_sent: 'si_sent',
    packing: 'packing',
    incoterm: 'incoterm',
    payment_terms: 'payment_terms',
    payment_method: 'payment_method',
    payment_currency: 'payment_currency',
    payment_amount: 'payment_amount',
    payment_date: 'payment_date',
    payment_status: 'payment_status',
    payment_notes: 'payment_notes',
    payment_attachments: 'payment_attachments',
    payment_notes_customer: 'payment_notes_customer',
    payment_attachments_customer: 'payment_attachments_customer',
    payment_notes_seller: 'payment_notes_seller',
    payment_attachments_seller: 'payment_attachments_seller',
    special_terms: 'special_terms',
    business_terms: 'business_terms',
    legal_terms: 'legal_terms',
    other_terms: 'other_terms',
    other_terms_customer: 'other_terms_customer',
    other_terms_seller: 'other_terms_seller',
    other_terms_customer_seller: 'other_terms_customer_seller',
    other_terms_seller_customer: 'other_terms_seller_customer',
    other_terms_customer_seller_customer: 'other_terms_customer_seller_customer',
    other_terms_seller_customer_seller: 'other_terms_seller_customer_seller',
    commission_customer: 'commission_customer',
    commission_seller: 'commission_seller',
    comission_total: 'comission_total',
    attachments: 'attachments',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const ContractProductScalarFieldEnum: {
    id: 'id',
    contract_id: 'contract_id',
    product_id: 'product_id',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type ContractProductScalarFieldEnum = (typeof ContractProductScalarFieldEnum)[keyof typeof ContractProductScalarFieldEnum]


  export const BrokerageInvoiceScalarFieldEnum: {
    id: 'id',
    contract_id: 'contract_id',
    comission_total_usd: 'comission_total_usd',
    comission_total_brl: 'comission_total_brl',
    bl_date: 'bl_date',
    bl_number: 'bl_number',
    bl_attachments: 'bl_attachments',
    ptax: 'ptax',
    attachments: 'attachments',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type BrokerageInvoiceScalarFieldEnum = (typeof BrokerageInvoiceScalarFieldEnum)[keyof typeof BrokerageInvoiceScalarFieldEnum]


  export const ArbitrationRuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    order: 'order',
    type: 'type',
    note: 'note',
    attachments: 'attachments',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type ArbitrationRuleScalarFieldEnum = (typeof ArbitrationRuleScalarFieldEnum)[keyof typeof ArbitrationRuleScalarFieldEnum]


  export const SpecialConditionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    tags: 'tags',
    type: 'type',
    note: 'note',
    attachments: 'attachments',
    order: 'order',
    createdAt: 'createdAt',
    active: 'active',
    status: 'status'
  };

  export type SpecialConditionScalarFieldEnum = (typeof SpecialConditionScalarFieldEnum)[keyof typeof SpecialConditionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    comercial_name?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    origin_country?: StringFilter<"Product"> | string
    price_comercial?: FloatFilter<"Product"> | number
    price_local?: FloatFilter<"Product"> | number
    currency?: StringFilter<"Product"> | string
    comission?: FloatFilter<"Product"> | number
    incoterm?: StringNullableListFilter<"Product">
    regulator_organ_number?: StringFilter<"Product"> | string
    sanity_rules?: StringNullableListFilter<"Product">
    pack_type?: StringFilter<"Product"> | string
    quantity_per_pack?: FloatFilter<"Product"> | number
    quantity_per_container?: FloatFilter<"Product"> | number
    container_type?: StringFilter<"Product"> | string
    country_from?: StringFilter<"Product"> | string
    supply_origin_country?: StringFilter<"Product"> | string
    port_origin?: StringFilter<"Product"> | string
    port_destination?: StringFilter<"Product"> | string
    documents_required?: StringNullableListFilter<"Product">
    record_owner?: StringFilter<"Product"> | string
    observation?: StringFilter<"Product"> | string
    attached_files?: StringNullableListFilter<"Product">
    sellersId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    active?: BoolFilter<"Product"> | boolean
    status?: StringFilter<"Product"> | string
    sellers?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    contracts?: ContractListRelationFilter
    contractProducts?: ContractProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    comercial_name?: SortOrder
    category?: SortOrder
    origin_country?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    currency?: SortOrder
    comission?: SortOrder
    incoterm?: SortOrder
    regulator_organ_number?: SortOrder
    sanity_rules?: SortOrder
    pack_type?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    container_type?: SortOrder
    country_from?: SortOrder
    supply_origin_country?: SortOrder
    port_origin?: SortOrder
    port_destination?: SortOrder
    documents_required?: SortOrder
    record_owner?: SortOrder
    observation?: SortOrder
    attached_files?: SortOrder
    sellersId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    sellers?: SellerOrderByWithRelationInput
    contracts?: ContractOrderByRelationAggregateInput
    contractProducts?: ContractProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    comercial_name?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    origin_country?: StringFilter<"Product"> | string
    price_comercial?: FloatFilter<"Product"> | number
    price_local?: FloatFilter<"Product"> | number
    currency?: StringFilter<"Product"> | string
    comission?: FloatFilter<"Product"> | number
    incoterm?: StringNullableListFilter<"Product">
    regulator_organ_number?: StringFilter<"Product"> | string
    sanity_rules?: StringNullableListFilter<"Product">
    pack_type?: StringFilter<"Product"> | string
    quantity_per_pack?: FloatFilter<"Product"> | number
    quantity_per_container?: FloatFilter<"Product"> | number
    container_type?: StringFilter<"Product"> | string
    country_from?: StringFilter<"Product"> | string
    supply_origin_country?: StringFilter<"Product"> | string
    port_origin?: StringFilter<"Product"> | string
    port_destination?: StringFilter<"Product"> | string
    documents_required?: StringNullableListFilter<"Product">
    record_owner?: StringFilter<"Product"> | string
    observation?: StringFilter<"Product"> | string
    attached_files?: StringNullableListFilter<"Product">
    sellersId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    active?: BoolFilter<"Product"> | boolean
    status?: StringFilter<"Product"> | string
    sellers?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    contracts?: ContractListRelationFilter
    contractProducts?: ContractProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    comercial_name?: SortOrder
    category?: SortOrder
    origin_country?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    currency?: SortOrder
    comission?: SortOrder
    incoterm?: SortOrder
    regulator_organ_number?: SortOrder
    sanity_rules?: SortOrder
    pack_type?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    container_type?: SortOrder
    country_from?: SortOrder
    supply_origin_country?: SortOrder
    port_origin?: SortOrder
    port_destination?: SortOrder
    documents_required?: SortOrder
    record_owner?: SortOrder
    observation?: SortOrder
    attached_files?: SortOrder
    sellersId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    sku?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    comercial_name?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    origin_country?: StringWithAggregatesFilter<"Product"> | string
    price_comercial?: FloatWithAggregatesFilter<"Product"> | number
    price_local?: FloatWithAggregatesFilter<"Product"> | number
    currency?: StringWithAggregatesFilter<"Product"> | string
    comission?: FloatWithAggregatesFilter<"Product"> | number
    incoterm?: StringNullableListFilter<"Product">
    regulator_organ_number?: StringWithAggregatesFilter<"Product"> | string
    sanity_rules?: StringNullableListFilter<"Product">
    pack_type?: StringWithAggregatesFilter<"Product"> | string
    quantity_per_pack?: FloatWithAggregatesFilter<"Product"> | number
    quantity_per_container?: FloatWithAggregatesFilter<"Product"> | number
    container_type?: StringWithAggregatesFilter<"Product"> | string
    country_from?: StringWithAggregatesFilter<"Product"> | string
    supply_origin_country?: StringWithAggregatesFilter<"Product"> | string
    port_origin?: StringWithAggregatesFilter<"Product"> | string
    port_destination?: StringWithAggregatesFilter<"Product"> | string
    documents_required?: StringNullableListFilter<"Product">
    record_owner?: StringWithAggregatesFilter<"Product"> | string
    observation?: StringWithAggregatesFilter<"Product"> | string
    attached_files?: StringNullableListFilter<"Product">
    sellersId?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    status?: StringWithAggregatesFilter<"Product"> | string
  }

  export type SellerWhereInput = {
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    id?: IntFilter<"Seller"> | number
    company_name?: StringFilter<"Seller"> | string
    full_address?: StringFilter<"Seller"> | string
    country?: StringFilter<"Seller"> | string
    tax_id?: StringFilter<"Seller"> | string
    contact_name?: StringFilter<"Seller"> | string
    whatsapp?: StringFilter<"Seller"> | string
    phone?: StringNullableListFilter<"Seller">
    email?: StringNullableListFilter<"Seller">
    website?: StringFilter<"Seller"> | string
    note?: StringFilter<"Seller"> | string
    description?: StringFilter<"Seller"> | string
    createdAt?: DateTimeFilter<"Seller"> | Date | string
    active?: BoolFilter<"Seller"> | boolean
    status?: StringFilter<"Seller"> | string
    products?: ProductListRelationFilter
    contracts?: ContractListRelationFilter
  }

  export type SellerOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    company_name?: StringFilter<"Seller"> | string
    full_address?: StringFilter<"Seller"> | string
    country?: StringFilter<"Seller"> | string
    tax_id?: StringFilter<"Seller"> | string
    contact_name?: StringFilter<"Seller"> | string
    whatsapp?: StringFilter<"Seller"> | string
    phone?: StringNullableListFilter<"Seller">
    email?: StringNullableListFilter<"Seller">
    website?: StringFilter<"Seller"> | string
    note?: StringFilter<"Seller"> | string
    description?: StringFilter<"Seller"> | string
    createdAt?: DateTimeFilter<"Seller"> | Date | string
    active?: BoolFilter<"Seller"> | boolean
    status?: StringFilter<"Seller"> | string
    products?: ProductListRelationFilter
    contracts?: ContractListRelationFilter
  }, "id">

  export type SellerOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: SellerCountOrderByAggregateInput
    _avg?: SellerAvgOrderByAggregateInput
    _max?: SellerMaxOrderByAggregateInput
    _min?: SellerMinOrderByAggregateInput
    _sum?: SellerSumOrderByAggregateInput
  }

  export type SellerScalarWhereWithAggregatesInput = {
    AND?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    OR?: SellerScalarWhereWithAggregatesInput[]
    NOT?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seller"> | number
    company_name?: StringWithAggregatesFilter<"Seller"> | string
    full_address?: StringWithAggregatesFilter<"Seller"> | string
    country?: StringWithAggregatesFilter<"Seller"> | string
    tax_id?: StringWithAggregatesFilter<"Seller"> | string
    contact_name?: StringWithAggregatesFilter<"Seller"> | string
    whatsapp?: StringWithAggregatesFilter<"Seller"> | string
    phone?: StringNullableListFilter<"Seller">
    email?: StringNullableListFilter<"Seller">
    website?: StringWithAggregatesFilter<"Seller"> | string
    note?: StringWithAggregatesFilter<"Seller"> | string
    description?: StringWithAggregatesFilter<"Seller"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Seller"> | Date | string
    active?: BoolWithAggregatesFilter<"Seller"> | boolean
    status?: StringWithAggregatesFilter<"Seller"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    full_name?: StringFilter<"Customer"> | string
    full_address?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    tax_id?: StringFilter<"Customer"> | string
    contact_name?: StringFilter<"Customer"> | string
    whatsapp?: StringFilter<"Customer"> | string
    phone?: StringNullableListFilter<"Customer">
    email?: StringNullableListFilter<"Customer">
    website?: StringFilter<"Customer"> | string
    note?: StringFilter<"Customer"> | string
    description?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    active?: BoolFilter<"Customer"> | boolean
    status?: StringFilter<"Customer"> | string
    contracts?: ContractListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    full_name?: StringFilter<"Customer"> | string
    full_address?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    tax_id?: StringFilter<"Customer"> | string
    contact_name?: StringFilter<"Customer"> | string
    whatsapp?: StringFilter<"Customer"> | string
    phone?: StringNullableListFilter<"Customer">
    email?: StringNullableListFilter<"Customer">
    website?: StringFilter<"Customer"> | string
    note?: StringFilter<"Customer"> | string
    description?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    active?: BoolFilter<"Customer"> | boolean
    status?: StringFilter<"Customer"> | string
    contracts?: ContractListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    full_name?: StringWithAggregatesFilter<"Customer"> | string
    full_address?: StringWithAggregatesFilter<"Customer"> | string
    country?: StringWithAggregatesFilter<"Customer"> | string
    tax_id?: StringWithAggregatesFilter<"Customer"> | string
    contact_name?: StringWithAggregatesFilter<"Customer"> | string
    whatsapp?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableListFilter<"Customer">
    email?: StringNullableListFilter<"Customer">
    website?: StringWithAggregatesFilter<"Customer"> | string
    note?: StringWithAggregatesFilter<"Customer"> | string
    description?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    active?: BoolWithAggregatesFilter<"Customer"> | boolean
    status?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    name?: StringFilter<"Contract"> | string
    description?: StringFilter<"Contract"> | string
    date_creation?: DateTimeFilter<"Contract"> | Date | string
    date_expiration?: DateTimeFilter<"Contract"> | Date | string
    date_signature?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature?: DateTimeFilter<"Contract"> | Date | string
    date_signature_customer?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature_customer?: DateTimeFilter<"Contract"> | Date | string
    date_signature_seller?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature_seller?: DateTimeFilter<"Contract"> | Date | string
    customer_id?: IntFilter<"Contract"> | number
    seller_id?: IntFilter<"Contract"> | number
    products_id?: IntNullableListFilter<"Contract">
    bording_date?: DateTimeFilter<"Contract"> | Date | string
    mt_value?: FloatFilter<"Contract"> | number
    destination_country?: StringFilter<"Contract"> | string
    destination_port?: StringFilter<"Contract"> | string
    shipping_company?: StringFilter<"Contract"> | string
    shipment_date?: DateTimeFilter<"Contract"> | Date | string
    si_sent?: BoolFilter<"Contract"> | boolean
    packing?: StringNullableListFilter<"Contract">
    incoterm?: StringNullableListFilter<"Contract">
    payment_terms?: StringFilter<"Contract"> | string
    payment_method?: StringFilter<"Contract"> | string
    payment_currency?: StringFilter<"Contract"> | string
    payment_amount?: FloatFilter<"Contract"> | number
    payment_date?: DateTimeFilter<"Contract"> | Date | string
    payment_status?: StringFilter<"Contract"> | string
    payment_notes?: StringFilter<"Contract"> | string
    payment_attachments?: StringNullableListFilter<"Contract">
    payment_notes_customer?: StringFilter<"Contract"> | string
    payment_attachments_customer?: StringNullableListFilter<"Contract">
    payment_notes_seller?: StringFilter<"Contract"> | string
    payment_attachments_seller?: StringNullableListFilter<"Contract">
    special_terms?: StringNullableListFilter<"Contract">
    business_terms?: StringNullableListFilter<"Contract">
    legal_terms?: StringNullableListFilter<"Contract">
    other_terms?: StringNullableListFilter<"Contract">
    other_terms_customer?: StringNullableListFilter<"Contract">
    other_terms_seller?: StringNullableListFilter<"Contract">
    other_terms_customer_seller?: StringNullableListFilter<"Contract">
    other_terms_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_customer_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_seller_customer_seller?: StringNullableListFilter<"Contract">
    commission_customer?: FloatFilter<"Contract"> | number
    commission_seller?: FloatFilter<"Contract"> | number
    comission_total?: FloatFilter<"Contract"> | number
    attachments?: StringNullableListFilter<"Contract">
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    active?: BoolFilter<"Contract"> | boolean
    status?: StringFilter<"Contract"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    seller?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    products?: ProductListRelationFilter
    contractProducts?: ContractProductListRelationFilter
    arbitration_rules?: ArbitrationRuleListRelationFilter
    special_conditions?: SpecialConditionListRelationFilter
    brokerageInvoices?: BrokerageInvoiceListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date_creation?: SortOrder
    date_expiration?: SortOrder
    date_signature?: SortOrder
    date_expiration_signature?: SortOrder
    date_signature_customer?: SortOrder
    date_expiration_signature_customer?: SortOrder
    date_signature_seller?: SortOrder
    date_expiration_signature_seller?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    products_id?: SortOrder
    bording_date?: SortOrder
    mt_value?: SortOrder
    destination_country?: SortOrder
    destination_port?: SortOrder
    shipping_company?: SortOrder
    shipment_date?: SortOrder
    si_sent?: SortOrder
    packing?: SortOrder
    incoterm?: SortOrder
    payment_terms?: SortOrder
    payment_method?: SortOrder
    payment_currency?: SortOrder
    payment_amount?: SortOrder
    payment_date?: SortOrder
    payment_status?: SortOrder
    payment_notes?: SortOrder
    payment_attachments?: SortOrder
    payment_notes_customer?: SortOrder
    payment_attachments_customer?: SortOrder
    payment_notes_seller?: SortOrder
    payment_attachments_seller?: SortOrder
    special_terms?: SortOrder
    business_terms?: SortOrder
    legal_terms?: SortOrder
    other_terms?: SortOrder
    other_terms_customer?: SortOrder
    other_terms_seller?: SortOrder
    other_terms_customer_seller?: SortOrder
    other_terms_seller_customer?: SortOrder
    other_terms_customer_seller_customer?: SortOrder
    other_terms_seller_customer_seller?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    seller?: SellerOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    contractProducts?: ContractProductOrderByRelationAggregateInput
    arbitration_rules?: ArbitrationRuleOrderByRelationAggregateInput
    special_conditions?: SpecialConditionOrderByRelationAggregateInput
    brokerageInvoices?: BrokerageInvoiceOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    name?: StringFilter<"Contract"> | string
    description?: StringFilter<"Contract"> | string
    date_creation?: DateTimeFilter<"Contract"> | Date | string
    date_expiration?: DateTimeFilter<"Contract"> | Date | string
    date_signature?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature?: DateTimeFilter<"Contract"> | Date | string
    date_signature_customer?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature_customer?: DateTimeFilter<"Contract"> | Date | string
    date_signature_seller?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature_seller?: DateTimeFilter<"Contract"> | Date | string
    customer_id?: IntFilter<"Contract"> | number
    seller_id?: IntFilter<"Contract"> | number
    products_id?: IntNullableListFilter<"Contract">
    bording_date?: DateTimeFilter<"Contract"> | Date | string
    mt_value?: FloatFilter<"Contract"> | number
    destination_country?: StringFilter<"Contract"> | string
    destination_port?: StringFilter<"Contract"> | string
    shipping_company?: StringFilter<"Contract"> | string
    shipment_date?: DateTimeFilter<"Contract"> | Date | string
    si_sent?: BoolFilter<"Contract"> | boolean
    packing?: StringNullableListFilter<"Contract">
    incoterm?: StringNullableListFilter<"Contract">
    payment_terms?: StringFilter<"Contract"> | string
    payment_method?: StringFilter<"Contract"> | string
    payment_currency?: StringFilter<"Contract"> | string
    payment_amount?: FloatFilter<"Contract"> | number
    payment_date?: DateTimeFilter<"Contract"> | Date | string
    payment_status?: StringFilter<"Contract"> | string
    payment_notes?: StringFilter<"Contract"> | string
    payment_attachments?: StringNullableListFilter<"Contract">
    payment_notes_customer?: StringFilter<"Contract"> | string
    payment_attachments_customer?: StringNullableListFilter<"Contract">
    payment_notes_seller?: StringFilter<"Contract"> | string
    payment_attachments_seller?: StringNullableListFilter<"Contract">
    special_terms?: StringNullableListFilter<"Contract">
    business_terms?: StringNullableListFilter<"Contract">
    legal_terms?: StringNullableListFilter<"Contract">
    other_terms?: StringNullableListFilter<"Contract">
    other_terms_customer?: StringNullableListFilter<"Contract">
    other_terms_seller?: StringNullableListFilter<"Contract">
    other_terms_customer_seller?: StringNullableListFilter<"Contract">
    other_terms_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_customer_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_seller_customer_seller?: StringNullableListFilter<"Contract">
    commission_customer?: FloatFilter<"Contract"> | number
    commission_seller?: FloatFilter<"Contract"> | number
    comission_total?: FloatFilter<"Contract"> | number
    attachments?: StringNullableListFilter<"Contract">
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    active?: BoolFilter<"Contract"> | boolean
    status?: StringFilter<"Contract"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    seller?: XOR<SellerScalarRelationFilter, SellerWhereInput>
    products?: ProductListRelationFilter
    contractProducts?: ContractProductListRelationFilter
    arbitration_rules?: ArbitrationRuleListRelationFilter
    special_conditions?: SpecialConditionListRelationFilter
    brokerageInvoices?: BrokerageInvoiceListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date_creation?: SortOrder
    date_expiration?: SortOrder
    date_signature?: SortOrder
    date_expiration_signature?: SortOrder
    date_signature_customer?: SortOrder
    date_expiration_signature_customer?: SortOrder
    date_signature_seller?: SortOrder
    date_expiration_signature_seller?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    products_id?: SortOrder
    bording_date?: SortOrder
    mt_value?: SortOrder
    destination_country?: SortOrder
    destination_port?: SortOrder
    shipping_company?: SortOrder
    shipment_date?: SortOrder
    si_sent?: SortOrder
    packing?: SortOrder
    incoterm?: SortOrder
    payment_terms?: SortOrder
    payment_method?: SortOrder
    payment_currency?: SortOrder
    payment_amount?: SortOrder
    payment_date?: SortOrder
    payment_status?: SortOrder
    payment_notes?: SortOrder
    payment_attachments?: SortOrder
    payment_notes_customer?: SortOrder
    payment_attachments_customer?: SortOrder
    payment_notes_seller?: SortOrder
    payment_attachments_seller?: SortOrder
    special_terms?: SortOrder
    business_terms?: SortOrder
    legal_terms?: SortOrder
    other_terms?: SortOrder
    other_terms_customer?: SortOrder
    other_terms_seller?: SortOrder
    other_terms_customer_seller?: SortOrder
    other_terms_seller_customer?: SortOrder
    other_terms_customer_seller_customer?: SortOrder
    other_terms_seller_customer_seller?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    name?: StringWithAggregatesFilter<"Contract"> | string
    description?: StringWithAggregatesFilter<"Contract"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_expiration?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_signature?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_expiration_signature?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_signature_customer?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_expiration_signature_customer?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_signature_seller?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    date_expiration_signature_seller?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    customer_id?: IntWithAggregatesFilter<"Contract"> | number
    seller_id?: IntWithAggregatesFilter<"Contract"> | number
    products_id?: IntNullableListFilter<"Contract">
    bording_date?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    mt_value?: FloatWithAggregatesFilter<"Contract"> | number
    destination_country?: StringWithAggregatesFilter<"Contract"> | string
    destination_port?: StringWithAggregatesFilter<"Contract"> | string
    shipping_company?: StringWithAggregatesFilter<"Contract"> | string
    shipment_date?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    si_sent?: BoolWithAggregatesFilter<"Contract"> | boolean
    packing?: StringNullableListFilter<"Contract">
    incoterm?: StringNullableListFilter<"Contract">
    payment_terms?: StringWithAggregatesFilter<"Contract"> | string
    payment_method?: StringWithAggregatesFilter<"Contract"> | string
    payment_currency?: StringWithAggregatesFilter<"Contract"> | string
    payment_amount?: FloatWithAggregatesFilter<"Contract"> | number
    payment_date?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    payment_status?: StringWithAggregatesFilter<"Contract"> | string
    payment_notes?: StringWithAggregatesFilter<"Contract"> | string
    payment_attachments?: StringNullableListFilter<"Contract">
    payment_notes_customer?: StringWithAggregatesFilter<"Contract"> | string
    payment_attachments_customer?: StringNullableListFilter<"Contract">
    payment_notes_seller?: StringWithAggregatesFilter<"Contract"> | string
    payment_attachments_seller?: StringNullableListFilter<"Contract">
    special_terms?: StringNullableListFilter<"Contract">
    business_terms?: StringNullableListFilter<"Contract">
    legal_terms?: StringNullableListFilter<"Contract">
    other_terms?: StringNullableListFilter<"Contract">
    other_terms_customer?: StringNullableListFilter<"Contract">
    other_terms_seller?: StringNullableListFilter<"Contract">
    other_terms_customer_seller?: StringNullableListFilter<"Contract">
    other_terms_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_customer_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_seller_customer_seller?: StringNullableListFilter<"Contract">
    commission_customer?: FloatWithAggregatesFilter<"Contract"> | number
    commission_seller?: FloatWithAggregatesFilter<"Contract"> | number
    comission_total?: FloatWithAggregatesFilter<"Contract"> | number
    attachments?: StringNullableListFilter<"Contract">
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    active?: BoolWithAggregatesFilter<"Contract"> | boolean
    status?: StringWithAggregatesFilter<"Contract"> | string
  }

  export type ContractProductWhereInput = {
    AND?: ContractProductWhereInput | ContractProductWhereInput[]
    OR?: ContractProductWhereInput[]
    NOT?: ContractProductWhereInput | ContractProductWhereInput[]
    id?: IntFilter<"ContractProduct"> | number
    contract_id?: IntFilter<"ContractProduct"> | number
    product_id?: IntFilter<"ContractProduct"> | number
    createdAt?: DateTimeFilter<"ContractProduct"> | Date | string
    active?: BoolFilter<"ContractProduct"> | boolean
    status?: StringFilter<"ContractProduct"> | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ContractProductOrderByWithRelationInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    contract?: ContractOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ContractProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractProductWhereInput | ContractProductWhereInput[]
    OR?: ContractProductWhereInput[]
    NOT?: ContractProductWhereInput | ContractProductWhereInput[]
    contract_id?: IntFilter<"ContractProduct"> | number
    product_id?: IntFilter<"ContractProduct"> | number
    createdAt?: DateTimeFilter<"ContractProduct"> | Date | string
    active?: BoolFilter<"ContractProduct"> | boolean
    status?: StringFilter<"ContractProduct"> | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ContractProductOrderByWithAggregationInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: ContractProductCountOrderByAggregateInput
    _avg?: ContractProductAvgOrderByAggregateInput
    _max?: ContractProductMaxOrderByAggregateInput
    _min?: ContractProductMinOrderByAggregateInput
    _sum?: ContractProductSumOrderByAggregateInput
  }

  export type ContractProductScalarWhereWithAggregatesInput = {
    AND?: ContractProductScalarWhereWithAggregatesInput | ContractProductScalarWhereWithAggregatesInput[]
    OR?: ContractProductScalarWhereWithAggregatesInput[]
    NOT?: ContractProductScalarWhereWithAggregatesInput | ContractProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractProduct"> | number
    contract_id?: IntWithAggregatesFilter<"ContractProduct"> | number
    product_id?: IntWithAggregatesFilter<"ContractProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContractProduct"> | Date | string
    active?: BoolWithAggregatesFilter<"ContractProduct"> | boolean
    status?: StringWithAggregatesFilter<"ContractProduct"> | string
  }

  export type BrokerageInvoiceWhereInput = {
    AND?: BrokerageInvoiceWhereInput | BrokerageInvoiceWhereInput[]
    OR?: BrokerageInvoiceWhereInput[]
    NOT?: BrokerageInvoiceWhereInput | BrokerageInvoiceWhereInput[]
    id?: IntFilter<"BrokerageInvoice"> | number
    contract_id?: IntFilter<"BrokerageInvoice"> | number
    comission_total_usd?: FloatFilter<"BrokerageInvoice"> | number
    comission_total_brl?: FloatFilter<"BrokerageInvoice"> | number
    bl_date?: DateTimeFilter<"BrokerageInvoice"> | Date | string
    bl_number?: StringFilter<"BrokerageInvoice"> | string
    bl_attachments?: StringNullableListFilter<"BrokerageInvoice">
    ptax?: FloatFilter<"BrokerageInvoice"> | number
    attachments?: StringNullableListFilter<"BrokerageInvoice">
    createdAt?: DateTimeFilter<"BrokerageInvoice"> | Date | string
    active?: BoolFilter<"BrokerageInvoice"> | boolean
    status?: StringFilter<"BrokerageInvoice"> | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type BrokerageInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    bl_date?: SortOrder
    bl_number?: SortOrder
    bl_attachments?: SortOrder
    ptax?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type BrokerageInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrokerageInvoiceWhereInput | BrokerageInvoiceWhereInput[]
    OR?: BrokerageInvoiceWhereInput[]
    NOT?: BrokerageInvoiceWhereInput | BrokerageInvoiceWhereInput[]
    contract_id?: IntFilter<"BrokerageInvoice"> | number
    comission_total_usd?: FloatFilter<"BrokerageInvoice"> | number
    comission_total_brl?: FloatFilter<"BrokerageInvoice"> | number
    bl_date?: DateTimeFilter<"BrokerageInvoice"> | Date | string
    bl_number?: StringFilter<"BrokerageInvoice"> | string
    bl_attachments?: StringNullableListFilter<"BrokerageInvoice">
    ptax?: FloatFilter<"BrokerageInvoice"> | number
    attachments?: StringNullableListFilter<"BrokerageInvoice">
    createdAt?: DateTimeFilter<"BrokerageInvoice"> | Date | string
    active?: BoolFilter<"BrokerageInvoice"> | boolean
    status?: StringFilter<"BrokerageInvoice"> | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type BrokerageInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    bl_date?: SortOrder
    bl_number?: SortOrder
    bl_attachments?: SortOrder
    ptax?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: BrokerageInvoiceCountOrderByAggregateInput
    _avg?: BrokerageInvoiceAvgOrderByAggregateInput
    _max?: BrokerageInvoiceMaxOrderByAggregateInput
    _min?: BrokerageInvoiceMinOrderByAggregateInput
    _sum?: BrokerageInvoiceSumOrderByAggregateInput
  }

  export type BrokerageInvoiceScalarWhereWithAggregatesInput = {
    AND?: BrokerageInvoiceScalarWhereWithAggregatesInput | BrokerageInvoiceScalarWhereWithAggregatesInput[]
    OR?: BrokerageInvoiceScalarWhereWithAggregatesInput[]
    NOT?: BrokerageInvoiceScalarWhereWithAggregatesInput | BrokerageInvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrokerageInvoice"> | number
    contract_id?: IntWithAggregatesFilter<"BrokerageInvoice"> | number
    comission_total_usd?: FloatWithAggregatesFilter<"BrokerageInvoice"> | number
    comission_total_brl?: FloatWithAggregatesFilter<"BrokerageInvoice"> | number
    bl_date?: DateTimeWithAggregatesFilter<"BrokerageInvoice"> | Date | string
    bl_number?: StringWithAggregatesFilter<"BrokerageInvoice"> | string
    bl_attachments?: StringNullableListFilter<"BrokerageInvoice">
    ptax?: FloatWithAggregatesFilter<"BrokerageInvoice"> | number
    attachments?: StringNullableListFilter<"BrokerageInvoice">
    createdAt?: DateTimeWithAggregatesFilter<"BrokerageInvoice"> | Date | string
    active?: BoolWithAggregatesFilter<"BrokerageInvoice"> | boolean
    status?: StringWithAggregatesFilter<"BrokerageInvoice"> | string
  }

  export type ArbitrationRuleWhereInput = {
    AND?: ArbitrationRuleWhereInput | ArbitrationRuleWhereInput[]
    OR?: ArbitrationRuleWhereInput[]
    NOT?: ArbitrationRuleWhereInput | ArbitrationRuleWhereInput[]
    id?: IntFilter<"ArbitrationRule"> | number
    name?: StringFilter<"ArbitrationRule"> | string
    description?: StringFilter<"ArbitrationRule"> | string
    order?: IntFilter<"ArbitrationRule"> | number
    type?: StringFilter<"ArbitrationRule"> | string
    note?: StringFilter<"ArbitrationRule"> | string
    attachments?: StringNullableListFilter<"ArbitrationRule">
    createdAt?: DateTimeFilter<"ArbitrationRule"> | Date | string
    active?: BoolFilter<"ArbitrationRule"> | boolean
    status?: StringFilter<"ArbitrationRule"> | string
    contracts?: ContractListRelationFilter
  }

  export type ArbitrationRuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    note?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type ArbitrationRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArbitrationRuleWhereInput | ArbitrationRuleWhereInput[]
    OR?: ArbitrationRuleWhereInput[]
    NOT?: ArbitrationRuleWhereInput | ArbitrationRuleWhereInput[]
    name?: StringFilter<"ArbitrationRule"> | string
    description?: StringFilter<"ArbitrationRule"> | string
    order?: IntFilter<"ArbitrationRule"> | number
    type?: StringFilter<"ArbitrationRule"> | string
    note?: StringFilter<"ArbitrationRule"> | string
    attachments?: StringNullableListFilter<"ArbitrationRule">
    createdAt?: DateTimeFilter<"ArbitrationRule"> | Date | string
    active?: BoolFilter<"ArbitrationRule"> | boolean
    status?: StringFilter<"ArbitrationRule"> | string
    contracts?: ContractListRelationFilter
  }, "id">

  export type ArbitrationRuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    note?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: ArbitrationRuleCountOrderByAggregateInput
    _avg?: ArbitrationRuleAvgOrderByAggregateInput
    _max?: ArbitrationRuleMaxOrderByAggregateInput
    _min?: ArbitrationRuleMinOrderByAggregateInput
    _sum?: ArbitrationRuleSumOrderByAggregateInput
  }

  export type ArbitrationRuleScalarWhereWithAggregatesInput = {
    AND?: ArbitrationRuleScalarWhereWithAggregatesInput | ArbitrationRuleScalarWhereWithAggregatesInput[]
    OR?: ArbitrationRuleScalarWhereWithAggregatesInput[]
    NOT?: ArbitrationRuleScalarWhereWithAggregatesInput | ArbitrationRuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArbitrationRule"> | number
    name?: StringWithAggregatesFilter<"ArbitrationRule"> | string
    description?: StringWithAggregatesFilter<"ArbitrationRule"> | string
    order?: IntWithAggregatesFilter<"ArbitrationRule"> | number
    type?: StringWithAggregatesFilter<"ArbitrationRule"> | string
    note?: StringWithAggregatesFilter<"ArbitrationRule"> | string
    attachments?: StringNullableListFilter<"ArbitrationRule">
    createdAt?: DateTimeWithAggregatesFilter<"ArbitrationRule"> | Date | string
    active?: BoolWithAggregatesFilter<"ArbitrationRule"> | boolean
    status?: StringWithAggregatesFilter<"ArbitrationRule"> | string
  }

  export type SpecialConditionWhereInput = {
    AND?: SpecialConditionWhereInput | SpecialConditionWhereInput[]
    OR?: SpecialConditionWhereInput[]
    NOT?: SpecialConditionWhereInput | SpecialConditionWhereInput[]
    id?: IntFilter<"SpecialCondition"> | number
    name?: StringFilter<"SpecialCondition"> | string
    description?: StringFilter<"SpecialCondition"> | string
    tags?: StringNullableListFilter<"SpecialCondition">
    type?: StringFilter<"SpecialCondition"> | string
    note?: StringFilter<"SpecialCondition"> | string
    attachments?: StringNullableListFilter<"SpecialCondition">
    order?: IntFilter<"SpecialCondition"> | number
    createdAt?: DateTimeFilter<"SpecialCondition"> | Date | string
    active?: BoolFilter<"SpecialCondition"> | boolean
    status?: StringFilter<"SpecialCondition"> | string
    contracts?: ContractListRelationFilter
  }

  export type SpecialConditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    type?: SortOrder
    note?: SortOrder
    attachments?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type SpecialConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpecialConditionWhereInput | SpecialConditionWhereInput[]
    OR?: SpecialConditionWhereInput[]
    NOT?: SpecialConditionWhereInput | SpecialConditionWhereInput[]
    name?: StringFilter<"SpecialCondition"> | string
    description?: StringFilter<"SpecialCondition"> | string
    tags?: StringNullableListFilter<"SpecialCondition">
    type?: StringFilter<"SpecialCondition"> | string
    note?: StringFilter<"SpecialCondition"> | string
    attachments?: StringNullableListFilter<"SpecialCondition">
    order?: IntFilter<"SpecialCondition"> | number
    createdAt?: DateTimeFilter<"SpecialCondition"> | Date | string
    active?: BoolFilter<"SpecialCondition"> | boolean
    status?: StringFilter<"SpecialCondition"> | string
    contracts?: ContractListRelationFilter
  }, "id">

  export type SpecialConditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    type?: SortOrder
    note?: SortOrder
    attachments?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: SpecialConditionCountOrderByAggregateInput
    _avg?: SpecialConditionAvgOrderByAggregateInput
    _max?: SpecialConditionMaxOrderByAggregateInput
    _min?: SpecialConditionMinOrderByAggregateInput
    _sum?: SpecialConditionSumOrderByAggregateInput
  }

  export type SpecialConditionScalarWhereWithAggregatesInput = {
    AND?: SpecialConditionScalarWhereWithAggregatesInput | SpecialConditionScalarWhereWithAggregatesInput[]
    OR?: SpecialConditionScalarWhereWithAggregatesInput[]
    NOT?: SpecialConditionScalarWhereWithAggregatesInput | SpecialConditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpecialCondition"> | number
    name?: StringWithAggregatesFilter<"SpecialCondition"> | string
    description?: StringWithAggregatesFilter<"SpecialCondition"> | string
    tags?: StringNullableListFilter<"SpecialCondition">
    type?: StringWithAggregatesFilter<"SpecialCondition"> | string
    note?: StringWithAggregatesFilter<"SpecialCondition"> | string
    attachments?: StringNullableListFilter<"SpecialCondition">
    order?: IntWithAggregatesFilter<"SpecialCondition"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SpecialCondition"> | Date | string
    active?: BoolWithAggregatesFilter<"SpecialCondition"> | boolean
    status?: StringWithAggregatesFilter<"SpecialCondition"> | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    role?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    sellers?: SellerCreateNestedOneWithoutProductsInput
    contracts?: ContractCreateNestedManyWithoutProductsInput
    contractProducts?: ContractProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    sellersId?: number
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutProductsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    sellers?: SellerUpdateOneRequiredWithoutProductsNestedInput
    contracts?: ContractUpdateManyWithoutProductsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    sellersId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutProductsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    sellersId?: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ProductUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    sellersId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SellerCreateInput = {
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductCreateNestedManyWithoutSellersInput
    contracts?: ContractCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateInput = {
    id?: number
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutSellersInput
    contracts?: ContractUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerUpdateInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutSellersNestedInput
    contracts?: ContractUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutSellersNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type SellerCreateManyInput = {
    id?: number
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type SellerUpdateManyMutationInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SellerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    name: string
    full_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: CustomerCreatephoneInput | string[]
    email?: CustomerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    full_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: CustomerCreatephoneInput | string[]
    email?: CustomerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: CustomerUpdatephoneInput | string[]
    email?: CustomerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: CustomerUpdatephoneInput | string[]
    email?: CustomerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    full_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: CustomerCreatephoneInput | string[]
    email?: CustomerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: CustomerUpdatephoneInput | string[]
    email?: CustomerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: CustomerUpdatephoneInput | string[]
    email?: CustomerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    seller: SellerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductCreateInput = {
    createdAt?: Date | string
    active?: boolean
    status: string
    contract: ContractCreateNestedOneWithoutContractProductsInput
    product: ProductCreateNestedOneWithoutContractProductsInput
  }

  export type ContractProductUncheckedCreateInput = {
    id?: number
    contract_id: number
    product_id: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contract?: ContractUpdateOneRequiredWithoutContractProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutContractProductsNestedInput
  }

  export type ContractProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contract_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductCreateManyInput = {
    id?: number
    contract_id: number
    product_id: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contract_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BrokerageInvoiceCreateInput = {
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date | string
    bl_number: string
    bl_attachments?: BrokerageInvoiceCreatebl_attachmentsInput | string[]
    ptax: number
    attachments?: BrokerageInvoiceCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    contract: ContractCreateNestedOneWithoutBrokerageInvoicesInput
  }

  export type BrokerageInvoiceUncheckedCreateInput = {
    id?: number
    contract_id: number
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date | string
    bl_number: string
    bl_attachments?: BrokerageInvoiceCreatebl_attachmentsInput | string[]
    ptax: number
    attachments?: BrokerageInvoiceCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type BrokerageInvoiceUpdateInput = {
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contract?: ContractUpdateOneRequiredWithoutBrokerageInvoicesNestedInput
  }

  export type BrokerageInvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contract_id?: IntFieldUpdateOperationsInput | number
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BrokerageInvoiceCreateManyInput = {
    id?: number
    contract_id: number
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date | string
    bl_number: string
    bl_attachments?: BrokerageInvoiceCreatebl_attachmentsInput | string[]
    ptax: number
    attachments?: BrokerageInvoiceCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type BrokerageInvoiceUpdateManyMutationInput = {
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BrokerageInvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contract_id?: IntFieldUpdateOperationsInput | number
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArbitrationRuleCreateInput = {
    name: string
    description: string
    order: number
    type: string
    note: string
    attachments?: ArbitrationRuleCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractCreateNestedManyWithoutArbitration_rulesInput
  }

  export type ArbitrationRuleUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    order: number
    type: string
    note: string
    attachments?: ArbitrationRuleCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutArbitration_rulesInput
  }

  export type ArbitrationRuleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutArbitration_rulesNestedInput
  }

  export type ArbitrationRuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutArbitration_rulesNestedInput
  }

  export type ArbitrationRuleCreateManyInput = {
    id?: number
    name: string
    description: string
    order: number
    type: string
    note: string
    attachments?: ArbitrationRuleCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ArbitrationRuleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArbitrationRuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialConditionCreateInput = {
    name: string
    description: string
    tags?: SpecialConditionCreatetagsInput | string[]
    type: string
    note: string
    attachments?: SpecialConditionCreateattachmentsInput | string[]
    order: number
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractCreateNestedManyWithoutSpecial_conditionsInput
  }

  export type SpecialConditionUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    tags?: SpecialConditionCreatetagsInput | string[]
    type: string
    note: string
    attachments?: SpecialConditionCreateattachmentsInput | string[]
    order: number
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutSpecial_conditionsInput
  }

  export type SpecialConditionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutSpecial_conditionsNestedInput
  }

  export type SpecialConditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutSpecial_conditionsNestedInput
  }

  export type SpecialConditionCreateManyInput = {
    id?: number
    name: string
    description: string
    tags?: SpecialConditionCreatetagsInput | string[]
    type: string
    note: string
    attachments?: SpecialConditionCreateattachmentsInput | string[]
    order: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type SpecialConditionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialConditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SellerScalarRelationFilter = {
    is?: SellerWhereInput
    isNot?: SellerWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type ContractProductListRelationFilter = {
    every?: ContractProductWhereInput
    some?: ContractProductWhereInput
    none?: ContractProductWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    comercial_name?: SortOrder
    category?: SortOrder
    origin_country?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    currency?: SortOrder
    comission?: SortOrder
    incoterm?: SortOrder
    regulator_organ_number?: SortOrder
    sanity_rules?: SortOrder
    pack_type?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    container_type?: SortOrder
    country_from?: SortOrder
    supply_origin_country?: SortOrder
    port_origin?: SortOrder
    port_destination?: SortOrder
    documents_required?: SortOrder
    record_owner?: SortOrder
    observation?: SortOrder
    attached_files?: SortOrder
    sellersId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    comission?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    sellersId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    comercial_name?: SortOrder
    category?: SortOrder
    origin_country?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    currency?: SortOrder
    comission?: SortOrder
    regulator_organ_number?: SortOrder
    pack_type?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    container_type?: SortOrder
    country_from?: SortOrder
    supply_origin_country?: SortOrder
    port_origin?: SortOrder
    port_destination?: SortOrder
    record_owner?: SortOrder
    observation?: SortOrder
    sellersId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    comercial_name?: SortOrder
    category?: SortOrder
    origin_country?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    currency?: SortOrder
    comission?: SortOrder
    regulator_organ_number?: SortOrder
    pack_type?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    container_type?: SortOrder
    country_from?: SortOrder
    supply_origin_country?: SortOrder
    port_origin?: SortOrder
    port_destination?: SortOrder
    record_owner?: SortOrder
    observation?: SortOrder
    sellersId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price_comercial?: SortOrder
    price_local?: SortOrder
    comission?: SortOrder
    quantity_per_pack?: SortOrder
    quantity_per_container?: SortOrder
    sellersId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellerCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type SellerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SellerMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type SellerMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type SellerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    full_name?: SortOrder
    full_address?: SortOrder
    country?: SortOrder
    tax_id?: SortOrder
    contact_name?: SortOrder
    whatsapp?: SortOrder
    website?: SortOrder
    note?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ArbitrationRuleListRelationFilter = {
    every?: ArbitrationRuleWhereInput
    some?: ArbitrationRuleWhereInput
    none?: ArbitrationRuleWhereInput
  }

  export type SpecialConditionListRelationFilter = {
    every?: SpecialConditionWhereInput
    some?: SpecialConditionWhereInput
    none?: SpecialConditionWhereInput
  }

  export type BrokerageInvoiceListRelationFilter = {
    every?: BrokerageInvoiceWhereInput
    some?: BrokerageInvoiceWhereInput
    none?: BrokerageInvoiceWhereInput
  }

  export type ArbitrationRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrokerageInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date_creation?: SortOrder
    date_expiration?: SortOrder
    date_signature?: SortOrder
    date_expiration_signature?: SortOrder
    date_signature_customer?: SortOrder
    date_expiration_signature_customer?: SortOrder
    date_signature_seller?: SortOrder
    date_expiration_signature_seller?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    products_id?: SortOrder
    bording_date?: SortOrder
    mt_value?: SortOrder
    destination_country?: SortOrder
    destination_port?: SortOrder
    shipping_company?: SortOrder
    shipment_date?: SortOrder
    si_sent?: SortOrder
    packing?: SortOrder
    incoterm?: SortOrder
    payment_terms?: SortOrder
    payment_method?: SortOrder
    payment_currency?: SortOrder
    payment_amount?: SortOrder
    payment_date?: SortOrder
    payment_status?: SortOrder
    payment_notes?: SortOrder
    payment_attachments?: SortOrder
    payment_notes_customer?: SortOrder
    payment_attachments_customer?: SortOrder
    payment_notes_seller?: SortOrder
    payment_attachments_seller?: SortOrder
    special_terms?: SortOrder
    business_terms?: SortOrder
    legal_terms?: SortOrder
    other_terms?: SortOrder
    other_terms_customer?: SortOrder
    other_terms_seller?: SortOrder
    other_terms_customer_seller?: SortOrder
    other_terms_seller_customer?: SortOrder
    other_terms_customer_seller_customer?: SortOrder
    other_terms_seller_customer_seller?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    products_id?: SortOrder
    mt_value?: SortOrder
    payment_amount?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date_creation?: SortOrder
    date_expiration?: SortOrder
    date_signature?: SortOrder
    date_expiration_signature?: SortOrder
    date_signature_customer?: SortOrder
    date_expiration_signature_customer?: SortOrder
    date_signature_seller?: SortOrder
    date_expiration_signature_seller?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    bording_date?: SortOrder
    mt_value?: SortOrder
    destination_country?: SortOrder
    destination_port?: SortOrder
    shipping_company?: SortOrder
    shipment_date?: SortOrder
    si_sent?: SortOrder
    payment_terms?: SortOrder
    payment_method?: SortOrder
    payment_currency?: SortOrder
    payment_amount?: SortOrder
    payment_date?: SortOrder
    payment_status?: SortOrder
    payment_notes?: SortOrder
    payment_notes_customer?: SortOrder
    payment_notes_seller?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date_creation?: SortOrder
    date_expiration?: SortOrder
    date_signature?: SortOrder
    date_expiration_signature?: SortOrder
    date_signature_customer?: SortOrder
    date_expiration_signature_customer?: SortOrder
    date_signature_seller?: SortOrder
    date_expiration_signature_seller?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    bording_date?: SortOrder
    mt_value?: SortOrder
    destination_country?: SortOrder
    destination_port?: SortOrder
    shipping_company?: SortOrder
    shipment_date?: SortOrder
    si_sent?: SortOrder
    payment_terms?: SortOrder
    payment_method?: SortOrder
    payment_currency?: SortOrder
    payment_amount?: SortOrder
    payment_date?: SortOrder
    payment_status?: SortOrder
    payment_notes?: SortOrder
    payment_notes_customer?: SortOrder
    payment_notes_seller?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    seller_id?: SortOrder
    products_id?: SortOrder
    mt_value?: SortOrder
    payment_amount?: SortOrder
    commission_customer?: SortOrder
    commission_seller?: SortOrder
    comission_total?: SortOrder
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ContractProductCountOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ContractProductAvgOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
  }

  export type ContractProductMaxOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ContractProductMinOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ContractProductSumOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    product_id?: SortOrder
  }

  export type BrokerageInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    bl_date?: SortOrder
    bl_number?: SortOrder
    bl_attachments?: SortOrder
    ptax?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type BrokerageInvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    ptax?: SortOrder
  }

  export type BrokerageInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    bl_date?: SortOrder
    bl_number?: SortOrder
    ptax?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type BrokerageInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    bl_date?: SortOrder
    bl_number?: SortOrder
    ptax?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type BrokerageInvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    comission_total_usd?: SortOrder
    comission_total_brl?: SortOrder
    ptax?: SortOrder
  }

  export type ArbitrationRuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    note?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ArbitrationRuleAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ArbitrationRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ArbitrationRuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ArbitrationRuleSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type SpecialConditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    type?: SortOrder
    note?: SortOrder
    attachments?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type SpecialConditionAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type SpecialConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    note?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type SpecialConditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    note?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type SpecialConditionSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateincotermInput = {
    set: string[]
  }

  export type ProductCreatesanity_rulesInput = {
    set: string[]
  }

  export type ProductCreatedocuments_requiredInput = {
    set: string[]
  }

  export type ProductCreateattached_filesInput = {
    set: string[]
  }

  export type SellerCreateNestedOneWithoutProductsInput = {
    create?: XOR<SellerCreateWithoutProductsInput, SellerUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutProductsInput
    connect?: SellerWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutProductsInput = {
    create?: XOR<ContractCreateWithoutProductsInput, ContractUncheckedCreateWithoutProductsInput> | ContractCreateWithoutProductsInput[] | ContractUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProductsInput | ContractCreateOrConnectWithoutProductsInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractProductCreateNestedManyWithoutProductInput = {
    create?: XOR<ContractProductCreateWithoutProductInput, ContractProductUncheckedCreateWithoutProductInput> | ContractProductCreateWithoutProductInput[] | ContractProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutProductInput | ContractProductCreateOrConnectWithoutProductInput[]
    createMany?: ContractProductCreateManyProductInputEnvelope
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ContractCreateWithoutProductsInput, ContractUncheckedCreateWithoutProductsInput> | ContractCreateWithoutProductsInput[] | ContractUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProductsInput | ContractCreateOrConnectWithoutProductsInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ContractProductCreateWithoutProductInput, ContractProductUncheckedCreateWithoutProductInput> | ContractProductCreateWithoutProductInput[] | ContractProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutProductInput | ContractProductCreateOrConnectWithoutProductInput[]
    createMany?: ContractProductCreateManyProductInputEnvelope
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateincotermInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdatesanity_rulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdatedocuments_requiredInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateattached_filesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SellerUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SellerCreateWithoutProductsInput, SellerUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutProductsInput
    upsert?: SellerUpsertWithoutProductsInput
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutProductsInput, SellerUpdateWithoutProductsInput>, SellerUncheckedUpdateWithoutProductsInput>
  }

  export type ContractUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ContractCreateWithoutProductsInput, ContractUncheckedCreateWithoutProductsInput> | ContractCreateWithoutProductsInput[] | ContractUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProductsInput | ContractCreateOrConnectWithoutProductsInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutProductsInput | ContractUpsertWithWhereUniqueWithoutProductsInput[]
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutProductsInput | ContractUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutProductsInput | ContractUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<ContractProductCreateWithoutProductInput, ContractProductUncheckedCreateWithoutProductInput> | ContractProductCreateWithoutProductInput[] | ContractProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutProductInput | ContractProductCreateOrConnectWithoutProductInput[]
    upsert?: ContractProductUpsertWithWhereUniqueWithoutProductInput | ContractProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ContractProductCreateManyProductInputEnvelope
    set?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    disconnect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    delete?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    update?: ContractProductUpdateWithWhereUniqueWithoutProductInput | ContractProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ContractProductUpdateManyWithWhereWithoutProductInput | ContractProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ContractProductScalarWhereInput | ContractProductScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ContractCreateWithoutProductsInput, ContractUncheckedCreateWithoutProductsInput> | ContractCreateWithoutProductsInput[] | ContractUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProductsInput | ContractCreateOrConnectWithoutProductsInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutProductsInput | ContractUpsertWithWhereUniqueWithoutProductsInput[]
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutProductsInput | ContractUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutProductsInput | ContractUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ContractProductCreateWithoutProductInput, ContractProductUncheckedCreateWithoutProductInput> | ContractProductCreateWithoutProductInput[] | ContractProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutProductInput | ContractProductCreateOrConnectWithoutProductInput[]
    upsert?: ContractProductUpsertWithWhereUniqueWithoutProductInput | ContractProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ContractProductCreateManyProductInputEnvelope
    set?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    disconnect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    delete?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    update?: ContractProductUpdateWithWhereUniqueWithoutProductInput | ContractProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ContractProductUpdateManyWithWhereWithoutProductInput | ContractProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ContractProductScalarWhereInput | ContractProductScalarWhereInput[]
  }

  export type SellerCreatephoneInput = {
    set: string[]
  }

  export type SellerCreateemailInput = {
    set: string[]
  }

  export type ProductCreateNestedManyWithoutSellersInput = {
    create?: XOR<ProductCreateWithoutSellersInput, ProductUncheckedCreateWithoutSellersInput> | ProductCreateWithoutSellersInput[] | ProductUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSellersInput | ProductCreateOrConnectWithoutSellersInput[]
    createMany?: ProductCreateManySellersInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutSellerInput = {
    create?: XOR<ContractCreateWithoutSellerInput, ContractUncheckedCreateWithoutSellerInput> | ContractCreateWithoutSellerInput[] | ContractUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSellerInput | ContractCreateOrConnectWithoutSellerInput[]
    createMany?: ContractCreateManySellerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSellersInput = {
    create?: XOR<ProductCreateWithoutSellersInput, ProductUncheckedCreateWithoutSellersInput> | ProductCreateWithoutSellersInput[] | ProductUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSellersInput | ProductCreateOrConnectWithoutSellersInput[]
    createMany?: ProductCreateManySellersInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ContractCreateWithoutSellerInput, ContractUncheckedCreateWithoutSellerInput> | ContractCreateWithoutSellerInput[] | ContractUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSellerInput | ContractCreateOrConnectWithoutSellerInput[]
    createMany?: ContractCreateManySellerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type SellerUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SellerUpdateemailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateManyWithoutSellersNestedInput = {
    create?: XOR<ProductCreateWithoutSellersInput, ProductUncheckedCreateWithoutSellersInput> | ProductCreateWithoutSellersInput[] | ProductUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSellersInput | ProductCreateOrConnectWithoutSellersInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSellersInput | ProductUpsertWithWhereUniqueWithoutSellersInput[]
    createMany?: ProductCreateManySellersInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSellersInput | ProductUpdateWithWhereUniqueWithoutSellersInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSellersInput | ProductUpdateManyWithWhereWithoutSellersInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ContractCreateWithoutSellerInput, ContractUncheckedCreateWithoutSellerInput> | ContractCreateWithoutSellerInput[] | ContractUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSellerInput | ContractCreateOrConnectWithoutSellerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutSellerInput | ContractUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ContractCreateManySellerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutSellerInput | ContractUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutSellerInput | ContractUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSellersNestedInput = {
    create?: XOR<ProductCreateWithoutSellersInput, ProductUncheckedCreateWithoutSellersInput> | ProductCreateWithoutSellersInput[] | ProductUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSellersInput | ProductCreateOrConnectWithoutSellersInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSellersInput | ProductUpsertWithWhereUniqueWithoutSellersInput[]
    createMany?: ProductCreateManySellersInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSellersInput | ProductUpdateWithWhereUniqueWithoutSellersInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSellersInput | ProductUpdateManyWithWhereWithoutSellersInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ContractCreateWithoutSellerInput, ContractUncheckedCreateWithoutSellerInput> | ContractCreateWithoutSellerInput[] | ContractUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSellerInput | ContractCreateOrConnectWithoutSellerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutSellerInput | ContractUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ContractCreateManySellerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutSellerInput | ContractUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutSellerInput | ContractUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CustomerCreatephoneInput = {
    set: string[]
  }

  export type CustomerCreateemailInput = {
    set: string[]
  }

  export type ContractCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type CustomerUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CustomerUpdateemailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractCreateproducts_idInput = {
    set: number[]
  }

  export type ContractCreatepackingInput = {
    set: string[]
  }

  export type ContractCreateincotermInput = {
    set: string[]
  }

  export type ContractCreatepayment_attachmentsInput = {
    set: string[]
  }

  export type ContractCreatepayment_attachments_customerInput = {
    set: string[]
  }

  export type ContractCreatepayment_attachments_sellerInput = {
    set: string[]
  }

  export type ContractCreatespecial_termsInput = {
    set: string[]
  }

  export type ContractCreatebusiness_termsInput = {
    set: string[]
  }

  export type ContractCreatelegal_termsInput = {
    set: string[]
  }

  export type ContractCreateother_termsInput = {
    set: string[]
  }

  export type ContractCreateother_terms_customerInput = {
    set: string[]
  }

  export type ContractCreateother_terms_sellerInput = {
    set: string[]
  }

  export type ContractCreateother_terms_customer_sellerInput = {
    set: string[]
  }

  export type ContractCreateother_terms_seller_customerInput = {
    set: string[]
  }

  export type ContractCreateother_terms_customer_seller_customerInput = {
    set: string[]
  }

  export type ContractCreateother_terms_seller_customer_sellerInput = {
    set: string[]
  }

  export type ContractCreateattachmentsInput = {
    set: string[]
  }

  export type CustomerCreateNestedOneWithoutContractsInput = {
    create?: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractsInput
    connect?: CustomerWhereUniqueInput
  }

  export type SellerCreateNestedOneWithoutContractsInput = {
    create?: XOR<SellerCreateWithoutContractsInput, SellerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutContractsInput
    connect?: SellerWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutContractsInput = {
    create?: XOR<ProductCreateWithoutContractsInput, ProductUncheckedCreateWithoutContractsInput> | ProductCreateWithoutContractsInput[] | ProductUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutContractsInput | ProductCreateOrConnectWithoutContractsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ContractProductCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractProductCreateWithoutContractInput, ContractProductUncheckedCreateWithoutContractInput> | ContractProductCreateWithoutContractInput[] | ContractProductUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutContractInput | ContractProductCreateOrConnectWithoutContractInput[]
    createMany?: ContractProductCreateManyContractInputEnvelope
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
  }

  export type ArbitrationRuleCreateNestedManyWithoutContractsInput = {
    create?: XOR<ArbitrationRuleCreateWithoutContractsInput, ArbitrationRuleUncheckedCreateWithoutContractsInput> | ArbitrationRuleCreateWithoutContractsInput[] | ArbitrationRuleUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ArbitrationRuleCreateOrConnectWithoutContractsInput | ArbitrationRuleCreateOrConnectWithoutContractsInput[]
    connect?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
  }

  export type SpecialConditionCreateNestedManyWithoutContractsInput = {
    create?: XOR<SpecialConditionCreateWithoutContractsInput, SpecialConditionUncheckedCreateWithoutContractsInput> | SpecialConditionCreateWithoutContractsInput[] | SpecialConditionUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: SpecialConditionCreateOrConnectWithoutContractsInput | SpecialConditionCreateOrConnectWithoutContractsInput[]
    connect?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
  }

  export type BrokerageInvoiceCreateNestedManyWithoutContractInput = {
    create?: XOR<BrokerageInvoiceCreateWithoutContractInput, BrokerageInvoiceUncheckedCreateWithoutContractInput> | BrokerageInvoiceCreateWithoutContractInput[] | BrokerageInvoiceUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BrokerageInvoiceCreateOrConnectWithoutContractInput | BrokerageInvoiceCreateOrConnectWithoutContractInput[]
    createMany?: BrokerageInvoiceCreateManyContractInputEnvelope
    connect?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutContractsInput = {
    create?: XOR<ProductCreateWithoutContractsInput, ProductUncheckedCreateWithoutContractsInput> | ProductCreateWithoutContractsInput[] | ProductUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutContractsInput | ProductCreateOrConnectWithoutContractsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ContractProductUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractProductCreateWithoutContractInput, ContractProductUncheckedCreateWithoutContractInput> | ContractProductCreateWithoutContractInput[] | ContractProductUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutContractInput | ContractProductCreateOrConnectWithoutContractInput[]
    createMany?: ContractProductCreateManyContractInputEnvelope
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
  }

  export type ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput = {
    create?: XOR<ArbitrationRuleCreateWithoutContractsInput, ArbitrationRuleUncheckedCreateWithoutContractsInput> | ArbitrationRuleCreateWithoutContractsInput[] | ArbitrationRuleUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ArbitrationRuleCreateOrConnectWithoutContractsInput | ArbitrationRuleCreateOrConnectWithoutContractsInput[]
    connect?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
  }

  export type SpecialConditionUncheckedCreateNestedManyWithoutContractsInput = {
    create?: XOR<SpecialConditionCreateWithoutContractsInput, SpecialConditionUncheckedCreateWithoutContractsInput> | SpecialConditionCreateWithoutContractsInput[] | SpecialConditionUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: SpecialConditionCreateOrConnectWithoutContractsInput | SpecialConditionCreateOrConnectWithoutContractsInput[]
    connect?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
  }

  export type BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<BrokerageInvoiceCreateWithoutContractInput, BrokerageInvoiceUncheckedCreateWithoutContractInput> | BrokerageInvoiceCreateWithoutContractInput[] | BrokerageInvoiceUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BrokerageInvoiceCreateOrConnectWithoutContractInput | BrokerageInvoiceCreateOrConnectWithoutContractInput[]
    createMany?: BrokerageInvoiceCreateManyContractInputEnvelope
    connect?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
  }

  export type ContractUpdateproducts_idInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ContractUpdatepackingInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateincotermInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdatepayment_attachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdatepayment_attachments_customerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdatepayment_attachments_sellerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdatespecial_termsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdatebusiness_termsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdatelegal_termsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_termsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_terms_customerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_terms_sellerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_terms_customer_sellerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_terms_seller_customerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_terms_customer_seller_customerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateother_terms_seller_customer_sellerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CustomerUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractsInput
    upsert?: CustomerUpsertWithoutContractsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutContractsInput, CustomerUpdateWithoutContractsInput>, CustomerUncheckedUpdateWithoutContractsInput>
  }

  export type SellerUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<SellerCreateWithoutContractsInput, SellerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: SellerCreateOrConnectWithoutContractsInput
    upsert?: SellerUpsertWithoutContractsInput
    connect?: SellerWhereUniqueInput
    update?: XOR<XOR<SellerUpdateToOneWithWhereWithoutContractsInput, SellerUpdateWithoutContractsInput>, SellerUncheckedUpdateWithoutContractsInput>
  }

  export type ProductUpdateManyWithoutContractsNestedInput = {
    create?: XOR<ProductCreateWithoutContractsInput, ProductUncheckedCreateWithoutContractsInput> | ProductCreateWithoutContractsInput[] | ProductUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutContractsInput | ProductCreateOrConnectWithoutContractsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutContractsInput | ProductUpsertWithWhereUniqueWithoutContractsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutContractsInput | ProductUpdateWithWhereUniqueWithoutContractsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutContractsInput | ProductUpdateManyWithWhereWithoutContractsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ContractProductUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractProductCreateWithoutContractInput, ContractProductUncheckedCreateWithoutContractInput> | ContractProductCreateWithoutContractInput[] | ContractProductUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutContractInput | ContractProductCreateOrConnectWithoutContractInput[]
    upsert?: ContractProductUpsertWithWhereUniqueWithoutContractInput | ContractProductUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractProductCreateManyContractInputEnvelope
    set?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    disconnect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    delete?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    update?: ContractProductUpdateWithWhereUniqueWithoutContractInput | ContractProductUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractProductUpdateManyWithWhereWithoutContractInput | ContractProductUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractProductScalarWhereInput | ContractProductScalarWhereInput[]
  }

  export type ArbitrationRuleUpdateManyWithoutContractsNestedInput = {
    create?: XOR<ArbitrationRuleCreateWithoutContractsInput, ArbitrationRuleUncheckedCreateWithoutContractsInput> | ArbitrationRuleCreateWithoutContractsInput[] | ArbitrationRuleUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ArbitrationRuleCreateOrConnectWithoutContractsInput | ArbitrationRuleCreateOrConnectWithoutContractsInput[]
    upsert?: ArbitrationRuleUpsertWithWhereUniqueWithoutContractsInput | ArbitrationRuleUpsertWithWhereUniqueWithoutContractsInput[]
    set?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    disconnect?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    delete?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    connect?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    update?: ArbitrationRuleUpdateWithWhereUniqueWithoutContractsInput | ArbitrationRuleUpdateWithWhereUniqueWithoutContractsInput[]
    updateMany?: ArbitrationRuleUpdateManyWithWhereWithoutContractsInput | ArbitrationRuleUpdateManyWithWhereWithoutContractsInput[]
    deleteMany?: ArbitrationRuleScalarWhereInput | ArbitrationRuleScalarWhereInput[]
  }

  export type SpecialConditionUpdateManyWithoutContractsNestedInput = {
    create?: XOR<SpecialConditionCreateWithoutContractsInput, SpecialConditionUncheckedCreateWithoutContractsInput> | SpecialConditionCreateWithoutContractsInput[] | SpecialConditionUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: SpecialConditionCreateOrConnectWithoutContractsInput | SpecialConditionCreateOrConnectWithoutContractsInput[]
    upsert?: SpecialConditionUpsertWithWhereUniqueWithoutContractsInput | SpecialConditionUpsertWithWhereUniqueWithoutContractsInput[]
    set?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    disconnect?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    delete?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    connect?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    update?: SpecialConditionUpdateWithWhereUniqueWithoutContractsInput | SpecialConditionUpdateWithWhereUniqueWithoutContractsInput[]
    updateMany?: SpecialConditionUpdateManyWithWhereWithoutContractsInput | SpecialConditionUpdateManyWithWhereWithoutContractsInput[]
    deleteMany?: SpecialConditionScalarWhereInput | SpecialConditionScalarWhereInput[]
  }

  export type BrokerageInvoiceUpdateManyWithoutContractNestedInput = {
    create?: XOR<BrokerageInvoiceCreateWithoutContractInput, BrokerageInvoiceUncheckedCreateWithoutContractInput> | BrokerageInvoiceCreateWithoutContractInput[] | BrokerageInvoiceUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BrokerageInvoiceCreateOrConnectWithoutContractInput | BrokerageInvoiceCreateOrConnectWithoutContractInput[]
    upsert?: BrokerageInvoiceUpsertWithWhereUniqueWithoutContractInput | BrokerageInvoiceUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: BrokerageInvoiceCreateManyContractInputEnvelope
    set?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    disconnect?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    delete?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    connect?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    update?: BrokerageInvoiceUpdateWithWhereUniqueWithoutContractInput | BrokerageInvoiceUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: BrokerageInvoiceUpdateManyWithWhereWithoutContractInput | BrokerageInvoiceUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: BrokerageInvoiceScalarWhereInput | BrokerageInvoiceScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutContractsNestedInput = {
    create?: XOR<ProductCreateWithoutContractsInput, ProductUncheckedCreateWithoutContractsInput> | ProductCreateWithoutContractsInput[] | ProductUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutContractsInput | ProductCreateOrConnectWithoutContractsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutContractsInput | ProductUpsertWithWhereUniqueWithoutContractsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutContractsInput | ProductUpdateWithWhereUniqueWithoutContractsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutContractsInput | ProductUpdateManyWithWhereWithoutContractsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ContractProductUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractProductCreateWithoutContractInput, ContractProductUncheckedCreateWithoutContractInput> | ContractProductCreateWithoutContractInput[] | ContractProductUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractProductCreateOrConnectWithoutContractInput | ContractProductCreateOrConnectWithoutContractInput[]
    upsert?: ContractProductUpsertWithWhereUniqueWithoutContractInput | ContractProductUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractProductCreateManyContractInputEnvelope
    set?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    disconnect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    delete?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    connect?: ContractProductWhereUniqueInput | ContractProductWhereUniqueInput[]
    update?: ContractProductUpdateWithWhereUniqueWithoutContractInput | ContractProductUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractProductUpdateManyWithWhereWithoutContractInput | ContractProductUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractProductScalarWhereInput | ContractProductScalarWhereInput[]
  }

  export type ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput = {
    create?: XOR<ArbitrationRuleCreateWithoutContractsInput, ArbitrationRuleUncheckedCreateWithoutContractsInput> | ArbitrationRuleCreateWithoutContractsInput[] | ArbitrationRuleUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: ArbitrationRuleCreateOrConnectWithoutContractsInput | ArbitrationRuleCreateOrConnectWithoutContractsInput[]
    upsert?: ArbitrationRuleUpsertWithWhereUniqueWithoutContractsInput | ArbitrationRuleUpsertWithWhereUniqueWithoutContractsInput[]
    set?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    disconnect?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    delete?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    connect?: ArbitrationRuleWhereUniqueInput | ArbitrationRuleWhereUniqueInput[]
    update?: ArbitrationRuleUpdateWithWhereUniqueWithoutContractsInput | ArbitrationRuleUpdateWithWhereUniqueWithoutContractsInput[]
    updateMany?: ArbitrationRuleUpdateManyWithWhereWithoutContractsInput | ArbitrationRuleUpdateManyWithWhereWithoutContractsInput[]
    deleteMany?: ArbitrationRuleScalarWhereInput | ArbitrationRuleScalarWhereInput[]
  }

  export type SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput = {
    create?: XOR<SpecialConditionCreateWithoutContractsInput, SpecialConditionUncheckedCreateWithoutContractsInput> | SpecialConditionCreateWithoutContractsInput[] | SpecialConditionUncheckedCreateWithoutContractsInput[]
    connectOrCreate?: SpecialConditionCreateOrConnectWithoutContractsInput | SpecialConditionCreateOrConnectWithoutContractsInput[]
    upsert?: SpecialConditionUpsertWithWhereUniqueWithoutContractsInput | SpecialConditionUpsertWithWhereUniqueWithoutContractsInput[]
    set?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    disconnect?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    delete?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    connect?: SpecialConditionWhereUniqueInput | SpecialConditionWhereUniqueInput[]
    update?: SpecialConditionUpdateWithWhereUniqueWithoutContractsInput | SpecialConditionUpdateWithWhereUniqueWithoutContractsInput[]
    updateMany?: SpecialConditionUpdateManyWithWhereWithoutContractsInput | SpecialConditionUpdateManyWithWhereWithoutContractsInput[]
    deleteMany?: SpecialConditionScalarWhereInput | SpecialConditionScalarWhereInput[]
  }

  export type BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<BrokerageInvoiceCreateWithoutContractInput, BrokerageInvoiceUncheckedCreateWithoutContractInput> | BrokerageInvoiceCreateWithoutContractInput[] | BrokerageInvoiceUncheckedCreateWithoutContractInput[]
    connectOrCreate?: BrokerageInvoiceCreateOrConnectWithoutContractInput | BrokerageInvoiceCreateOrConnectWithoutContractInput[]
    upsert?: BrokerageInvoiceUpsertWithWhereUniqueWithoutContractInput | BrokerageInvoiceUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: BrokerageInvoiceCreateManyContractInputEnvelope
    set?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    disconnect?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    delete?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    connect?: BrokerageInvoiceWhereUniqueInput | BrokerageInvoiceWhereUniqueInput[]
    update?: BrokerageInvoiceUpdateWithWhereUniqueWithoutContractInput | BrokerageInvoiceUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: BrokerageInvoiceUpdateManyWithWhereWithoutContractInput | BrokerageInvoiceUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: BrokerageInvoiceScalarWhereInput | BrokerageInvoiceScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutContractProductsInput = {
    create?: XOR<ContractCreateWithoutContractProductsInput, ContractUncheckedCreateWithoutContractProductsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractProductsInput
    connect?: ContractWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutContractProductsInput = {
    create?: XOR<ProductCreateWithoutContractProductsInput, ProductUncheckedCreateWithoutContractProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutContractProductsInput
    connect?: ProductWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutContractProductsNestedInput = {
    create?: XOR<ContractCreateWithoutContractProductsInput, ContractUncheckedCreateWithoutContractProductsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractProductsInput
    upsert?: ContractUpsertWithoutContractProductsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutContractProductsInput, ContractUpdateWithoutContractProductsInput>, ContractUncheckedUpdateWithoutContractProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutContractProductsNestedInput = {
    create?: XOR<ProductCreateWithoutContractProductsInput, ProductUncheckedCreateWithoutContractProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutContractProductsInput
    upsert?: ProductUpsertWithoutContractProductsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutContractProductsInput, ProductUpdateWithoutContractProductsInput>, ProductUncheckedUpdateWithoutContractProductsInput>
  }

  export type BrokerageInvoiceCreatebl_attachmentsInput = {
    set: string[]
  }

  export type BrokerageInvoiceCreateattachmentsInput = {
    set: string[]
  }

  export type ContractCreateNestedOneWithoutBrokerageInvoicesInput = {
    create?: XOR<ContractCreateWithoutBrokerageInvoicesInput, ContractUncheckedCreateWithoutBrokerageInvoicesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutBrokerageInvoicesInput
    connect?: ContractWhereUniqueInput
  }

  export type BrokerageInvoiceUpdatebl_attachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrokerageInvoiceUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateOneRequiredWithoutBrokerageInvoicesNestedInput = {
    create?: XOR<ContractCreateWithoutBrokerageInvoicesInput, ContractUncheckedCreateWithoutBrokerageInvoicesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutBrokerageInvoicesInput
    upsert?: ContractUpsertWithoutBrokerageInvoicesInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutBrokerageInvoicesInput, ContractUpdateWithoutBrokerageInvoicesInput>, ContractUncheckedUpdateWithoutBrokerageInvoicesInput>
  }

  export type ArbitrationRuleCreateattachmentsInput = {
    set: string[]
  }

  export type ContractCreateNestedManyWithoutArbitration_rulesInput = {
    create?: XOR<ContractCreateWithoutArbitration_rulesInput, ContractUncheckedCreateWithoutArbitration_rulesInput> | ContractCreateWithoutArbitration_rulesInput[] | ContractUncheckedCreateWithoutArbitration_rulesInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutArbitration_rulesInput | ContractCreateOrConnectWithoutArbitration_rulesInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutArbitration_rulesInput = {
    create?: XOR<ContractCreateWithoutArbitration_rulesInput, ContractUncheckedCreateWithoutArbitration_rulesInput> | ContractCreateWithoutArbitration_rulesInput[] | ContractUncheckedCreateWithoutArbitration_rulesInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutArbitration_rulesInput | ContractCreateOrConnectWithoutArbitration_rulesInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ArbitrationRuleUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateManyWithoutArbitration_rulesNestedInput = {
    create?: XOR<ContractCreateWithoutArbitration_rulesInput, ContractUncheckedCreateWithoutArbitration_rulesInput> | ContractCreateWithoutArbitration_rulesInput[] | ContractUncheckedCreateWithoutArbitration_rulesInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutArbitration_rulesInput | ContractCreateOrConnectWithoutArbitration_rulesInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutArbitration_rulesInput | ContractUpsertWithWhereUniqueWithoutArbitration_rulesInput[]
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutArbitration_rulesInput | ContractUpdateWithWhereUniqueWithoutArbitration_rulesInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutArbitration_rulesInput | ContractUpdateManyWithWhereWithoutArbitration_rulesInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutArbitration_rulesNestedInput = {
    create?: XOR<ContractCreateWithoutArbitration_rulesInput, ContractUncheckedCreateWithoutArbitration_rulesInput> | ContractCreateWithoutArbitration_rulesInput[] | ContractUncheckedCreateWithoutArbitration_rulesInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutArbitration_rulesInput | ContractCreateOrConnectWithoutArbitration_rulesInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutArbitration_rulesInput | ContractUpsertWithWhereUniqueWithoutArbitration_rulesInput[]
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutArbitration_rulesInput | ContractUpdateWithWhereUniqueWithoutArbitration_rulesInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutArbitration_rulesInput | ContractUpdateManyWithWhereWithoutArbitration_rulesInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type SpecialConditionCreatetagsInput = {
    set: string[]
  }

  export type SpecialConditionCreateattachmentsInput = {
    set: string[]
  }

  export type ContractCreateNestedManyWithoutSpecial_conditionsInput = {
    create?: XOR<ContractCreateWithoutSpecial_conditionsInput, ContractUncheckedCreateWithoutSpecial_conditionsInput> | ContractCreateWithoutSpecial_conditionsInput[] | ContractUncheckedCreateWithoutSpecial_conditionsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSpecial_conditionsInput | ContractCreateOrConnectWithoutSpecial_conditionsInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutSpecial_conditionsInput = {
    create?: XOR<ContractCreateWithoutSpecial_conditionsInput, ContractUncheckedCreateWithoutSpecial_conditionsInput> | ContractCreateWithoutSpecial_conditionsInput[] | ContractUncheckedCreateWithoutSpecial_conditionsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSpecial_conditionsInput | ContractCreateOrConnectWithoutSpecial_conditionsInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type SpecialConditionUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SpecialConditionUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateManyWithoutSpecial_conditionsNestedInput = {
    create?: XOR<ContractCreateWithoutSpecial_conditionsInput, ContractUncheckedCreateWithoutSpecial_conditionsInput> | ContractCreateWithoutSpecial_conditionsInput[] | ContractUncheckedCreateWithoutSpecial_conditionsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSpecial_conditionsInput | ContractCreateOrConnectWithoutSpecial_conditionsInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutSpecial_conditionsInput | ContractUpsertWithWhereUniqueWithoutSpecial_conditionsInput[]
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutSpecial_conditionsInput | ContractUpdateWithWhereUniqueWithoutSpecial_conditionsInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutSpecial_conditionsInput | ContractUpdateManyWithWhereWithoutSpecial_conditionsInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutSpecial_conditionsNestedInput = {
    create?: XOR<ContractCreateWithoutSpecial_conditionsInput, ContractUncheckedCreateWithoutSpecial_conditionsInput> | ContractCreateWithoutSpecial_conditionsInput[] | ContractUncheckedCreateWithoutSpecial_conditionsInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutSpecial_conditionsInput | ContractCreateOrConnectWithoutSpecial_conditionsInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutSpecial_conditionsInput | ContractUpsertWithWhereUniqueWithoutSpecial_conditionsInput[]
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutSpecial_conditionsInput | ContractUpdateWithWhereUniqueWithoutSpecial_conditionsInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutSpecial_conditionsInput | ContractUpdateManyWithWhereWithoutSpecial_conditionsInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SellerCreateWithoutProductsInput = {
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractCreateNestedManyWithoutSellerInput
  }

  export type SellerUncheckedCreateWithoutProductsInput = {
    id?: number
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerCreateOrConnectWithoutProductsInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutProductsInput, SellerUncheckedCreateWithoutProductsInput>
  }

  export type ContractCreateWithoutProductsInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    seller: SellerCreateNestedOneWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutProductsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutProductsInput, ContractUncheckedCreateWithoutProductsInput>
  }

  export type ContractProductCreateWithoutProductInput = {
    createdAt?: Date | string
    active?: boolean
    status: string
    contract: ContractCreateNestedOneWithoutContractProductsInput
  }

  export type ContractProductUncheckedCreateWithoutProductInput = {
    id?: number
    contract_id: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractProductCreateOrConnectWithoutProductInput = {
    where: ContractProductWhereUniqueInput
    create: XOR<ContractProductCreateWithoutProductInput, ContractProductUncheckedCreateWithoutProductInput>
  }

  export type ContractProductCreateManyProductInputEnvelope = {
    data: ContractProductCreateManyProductInput | ContractProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SellerUpsertWithoutProductsInput = {
    update: XOR<SellerUpdateWithoutProductsInput, SellerUncheckedUpdateWithoutProductsInput>
    create: XOR<SellerCreateWithoutProductsInput, SellerUncheckedCreateWithoutProductsInput>
    where?: SellerWhereInput
  }

  export type SellerUpdateToOneWithWhereWithoutProductsInput = {
    where?: SellerWhereInput
    data: XOR<SellerUpdateWithoutProductsInput, SellerUncheckedUpdateWithoutProductsInput>
  }

  export type SellerUpdateWithoutProductsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutSellerNestedInput
  }

  export type SellerUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutProductsInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutProductsInput, ContractUncheckedUpdateWithoutProductsInput>
    create: XOR<ContractCreateWithoutProductsInput, ContractUncheckedCreateWithoutProductsInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutProductsInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutProductsInput, ContractUncheckedUpdateWithoutProductsInput>
  }

  export type ContractUpdateManyWithWhereWithoutProductsInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutProductsInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    name?: StringFilter<"Contract"> | string
    description?: StringFilter<"Contract"> | string
    date_creation?: DateTimeFilter<"Contract"> | Date | string
    date_expiration?: DateTimeFilter<"Contract"> | Date | string
    date_signature?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature?: DateTimeFilter<"Contract"> | Date | string
    date_signature_customer?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature_customer?: DateTimeFilter<"Contract"> | Date | string
    date_signature_seller?: DateTimeFilter<"Contract"> | Date | string
    date_expiration_signature_seller?: DateTimeFilter<"Contract"> | Date | string
    customer_id?: IntFilter<"Contract"> | number
    seller_id?: IntFilter<"Contract"> | number
    products_id?: IntNullableListFilter<"Contract">
    bording_date?: DateTimeFilter<"Contract"> | Date | string
    mt_value?: FloatFilter<"Contract"> | number
    destination_country?: StringFilter<"Contract"> | string
    destination_port?: StringFilter<"Contract"> | string
    shipping_company?: StringFilter<"Contract"> | string
    shipment_date?: DateTimeFilter<"Contract"> | Date | string
    si_sent?: BoolFilter<"Contract"> | boolean
    packing?: StringNullableListFilter<"Contract">
    incoterm?: StringNullableListFilter<"Contract">
    payment_terms?: StringFilter<"Contract"> | string
    payment_method?: StringFilter<"Contract"> | string
    payment_currency?: StringFilter<"Contract"> | string
    payment_amount?: FloatFilter<"Contract"> | number
    payment_date?: DateTimeFilter<"Contract"> | Date | string
    payment_status?: StringFilter<"Contract"> | string
    payment_notes?: StringFilter<"Contract"> | string
    payment_attachments?: StringNullableListFilter<"Contract">
    payment_notes_customer?: StringFilter<"Contract"> | string
    payment_attachments_customer?: StringNullableListFilter<"Contract">
    payment_notes_seller?: StringFilter<"Contract"> | string
    payment_attachments_seller?: StringNullableListFilter<"Contract">
    special_terms?: StringNullableListFilter<"Contract">
    business_terms?: StringNullableListFilter<"Contract">
    legal_terms?: StringNullableListFilter<"Contract">
    other_terms?: StringNullableListFilter<"Contract">
    other_terms_customer?: StringNullableListFilter<"Contract">
    other_terms_seller?: StringNullableListFilter<"Contract">
    other_terms_customer_seller?: StringNullableListFilter<"Contract">
    other_terms_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_customer_seller_customer?: StringNullableListFilter<"Contract">
    other_terms_seller_customer_seller?: StringNullableListFilter<"Contract">
    commission_customer?: FloatFilter<"Contract"> | number
    commission_seller?: FloatFilter<"Contract"> | number
    comission_total?: FloatFilter<"Contract"> | number
    attachments?: StringNullableListFilter<"Contract">
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    active?: BoolFilter<"Contract"> | boolean
    status?: StringFilter<"Contract"> | string
  }

  export type ContractProductUpsertWithWhereUniqueWithoutProductInput = {
    where: ContractProductWhereUniqueInput
    update: XOR<ContractProductUpdateWithoutProductInput, ContractProductUncheckedUpdateWithoutProductInput>
    create: XOR<ContractProductCreateWithoutProductInput, ContractProductUncheckedCreateWithoutProductInput>
  }

  export type ContractProductUpdateWithWhereUniqueWithoutProductInput = {
    where: ContractProductWhereUniqueInput
    data: XOR<ContractProductUpdateWithoutProductInput, ContractProductUncheckedUpdateWithoutProductInput>
  }

  export type ContractProductUpdateManyWithWhereWithoutProductInput = {
    where: ContractProductScalarWhereInput
    data: XOR<ContractProductUpdateManyMutationInput, ContractProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ContractProductScalarWhereInput = {
    AND?: ContractProductScalarWhereInput | ContractProductScalarWhereInput[]
    OR?: ContractProductScalarWhereInput[]
    NOT?: ContractProductScalarWhereInput | ContractProductScalarWhereInput[]
    id?: IntFilter<"ContractProduct"> | number
    contract_id?: IntFilter<"ContractProduct"> | number
    product_id?: IntFilter<"ContractProduct"> | number
    createdAt?: DateTimeFilter<"ContractProduct"> | Date | string
    active?: BoolFilter<"ContractProduct"> | boolean
    status?: StringFilter<"ContractProduct"> | string
  }

  export type ProductCreateWithoutSellersInput = {
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractCreateNestedManyWithoutProductsInput
    contractProducts?: ContractProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSellersInput = {
    id?: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutProductsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSellersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSellersInput, ProductUncheckedCreateWithoutSellersInput>
  }

  export type ProductCreateManySellersInputEnvelope = {
    data: ProductCreateManySellersInput | ProductCreateManySellersInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutSellerInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutSellerInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutSellerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutSellerInput, ContractUncheckedCreateWithoutSellerInput>
  }

  export type ContractCreateManySellerInputEnvelope = {
    data: ContractCreateManySellerInput | ContractCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutSellersInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSellersInput, ProductUncheckedUpdateWithoutSellersInput>
    create: XOR<ProductCreateWithoutSellersInput, ProductUncheckedCreateWithoutSellersInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSellersInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSellersInput, ProductUncheckedUpdateWithoutSellersInput>
  }

  export type ProductUpdateManyWithWhereWithoutSellersInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSellersInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    comercial_name?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    origin_country?: StringFilter<"Product"> | string
    price_comercial?: FloatFilter<"Product"> | number
    price_local?: FloatFilter<"Product"> | number
    currency?: StringFilter<"Product"> | string
    comission?: FloatFilter<"Product"> | number
    incoterm?: StringNullableListFilter<"Product">
    regulator_organ_number?: StringFilter<"Product"> | string
    sanity_rules?: StringNullableListFilter<"Product">
    pack_type?: StringFilter<"Product"> | string
    quantity_per_pack?: FloatFilter<"Product"> | number
    quantity_per_container?: FloatFilter<"Product"> | number
    container_type?: StringFilter<"Product"> | string
    country_from?: StringFilter<"Product"> | string
    supply_origin_country?: StringFilter<"Product"> | string
    port_origin?: StringFilter<"Product"> | string
    port_destination?: StringFilter<"Product"> | string
    documents_required?: StringNullableListFilter<"Product">
    record_owner?: StringFilter<"Product"> | string
    observation?: StringFilter<"Product"> | string
    attached_files?: StringNullableListFilter<"Product">
    sellersId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    active?: BoolFilter<"Product"> | boolean
    status?: StringFilter<"Product"> | string
  }

  export type ContractUpsertWithWhereUniqueWithoutSellerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutSellerInput, ContractUncheckedUpdateWithoutSellerInput>
    create: XOR<ContractCreateWithoutSellerInput, ContractUncheckedCreateWithoutSellerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutSellerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutSellerInput, ContractUncheckedUpdateWithoutSellerInput>
  }

  export type ContractUpdateManyWithWhereWithoutSellerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutSellerInput>
  }

  export type ContractCreateWithoutCustomerInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    seller: SellerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCustomerInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractCreateManyCustomerInputEnvelope = {
    data: ContractCreateManyCustomerInput | ContractCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
  }

  export type ContractUpdateManyWithWhereWithoutCustomerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutContractsInput = {
    name: string
    full_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: CustomerCreatephoneInput | string[]
    email?: CustomerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type CustomerUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    full_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: CustomerCreatephoneInput | string[]
    email?: CustomerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type CustomerCreateOrConnectWithoutContractsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
  }

  export type SellerCreateWithoutContractsInput = {
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductCreateNestedManyWithoutSellersInput
  }

  export type SellerUncheckedCreateWithoutContractsInput = {
    id?: number
    company_name: string
    full_address: string
    country: string
    tax_id: string
    contact_name: string
    whatsapp: string
    phone?: SellerCreatephoneInput | string[]
    email?: SellerCreateemailInput | string[]
    website: string
    note: string
    description: string
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutSellersInput
  }

  export type SellerCreateOrConnectWithoutContractsInput = {
    where: SellerWhereUniqueInput
    create: XOR<SellerCreateWithoutContractsInput, SellerUncheckedCreateWithoutContractsInput>
  }

  export type ProductCreateWithoutContractsInput = {
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    sellers?: SellerCreateNestedOneWithoutProductsInput
    contractProducts?: ContractProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutContractsInput = {
    id?: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    sellersId?: number
    createdAt?: Date | string
    active?: boolean
    status: string
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutContractsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutContractsInput, ProductUncheckedCreateWithoutContractsInput>
  }

  export type ContractProductCreateWithoutContractInput = {
    createdAt?: Date | string
    active?: boolean
    status: string
    product: ProductCreateNestedOneWithoutContractProductsInput
  }

  export type ContractProductUncheckedCreateWithoutContractInput = {
    id?: number
    product_id: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractProductCreateOrConnectWithoutContractInput = {
    where: ContractProductWhereUniqueInput
    create: XOR<ContractProductCreateWithoutContractInput, ContractProductUncheckedCreateWithoutContractInput>
  }

  export type ContractProductCreateManyContractInputEnvelope = {
    data: ContractProductCreateManyContractInput | ContractProductCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ArbitrationRuleCreateWithoutContractsInput = {
    name: string
    description: string
    order: number
    type: string
    note: string
    attachments?: ArbitrationRuleCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ArbitrationRuleUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    description: string
    order: number
    type: string
    note: string
    attachments?: ArbitrationRuleCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ArbitrationRuleCreateOrConnectWithoutContractsInput = {
    where: ArbitrationRuleWhereUniqueInput
    create: XOR<ArbitrationRuleCreateWithoutContractsInput, ArbitrationRuleUncheckedCreateWithoutContractsInput>
  }

  export type SpecialConditionCreateWithoutContractsInput = {
    name: string
    description: string
    tags?: SpecialConditionCreatetagsInput | string[]
    type: string
    note: string
    attachments?: SpecialConditionCreateattachmentsInput | string[]
    order: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type SpecialConditionUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    description: string
    tags?: SpecialConditionCreatetagsInput | string[]
    type: string
    note: string
    attachments?: SpecialConditionCreateattachmentsInput | string[]
    order: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type SpecialConditionCreateOrConnectWithoutContractsInput = {
    where: SpecialConditionWhereUniqueInput
    create: XOR<SpecialConditionCreateWithoutContractsInput, SpecialConditionUncheckedCreateWithoutContractsInput>
  }

  export type BrokerageInvoiceCreateWithoutContractInput = {
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date | string
    bl_number: string
    bl_attachments?: BrokerageInvoiceCreatebl_attachmentsInput | string[]
    ptax: number
    attachments?: BrokerageInvoiceCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type BrokerageInvoiceUncheckedCreateWithoutContractInput = {
    id?: number
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date | string
    bl_number: string
    bl_attachments?: BrokerageInvoiceCreatebl_attachmentsInput | string[]
    ptax: number
    attachments?: BrokerageInvoiceCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type BrokerageInvoiceCreateOrConnectWithoutContractInput = {
    where: BrokerageInvoiceWhereUniqueInput
    create: XOR<BrokerageInvoiceCreateWithoutContractInput, BrokerageInvoiceUncheckedCreateWithoutContractInput>
  }

  export type BrokerageInvoiceCreateManyContractInputEnvelope = {
    data: BrokerageInvoiceCreateManyContractInput | BrokerageInvoiceCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutContractsInput = {
    update: XOR<CustomerUpdateWithoutContractsInput, CustomerUncheckedUpdateWithoutContractsInput>
    create: XOR<CustomerCreateWithoutContractsInput, CustomerUncheckedCreateWithoutContractsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutContractsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutContractsInput, CustomerUncheckedUpdateWithoutContractsInput>
  }

  export type CustomerUpdateWithoutContractsInput = {
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: CustomerUpdatephoneInput | string[]
    email?: CustomerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: CustomerUpdatephoneInput | string[]
    email?: CustomerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SellerUpsertWithoutContractsInput = {
    update: XOR<SellerUpdateWithoutContractsInput, SellerUncheckedUpdateWithoutContractsInput>
    create: XOR<SellerCreateWithoutContractsInput, SellerUncheckedCreateWithoutContractsInput>
    where?: SellerWhereInput
  }

  export type SellerUpdateToOneWithWhereWithoutContractsInput = {
    where?: SellerWhereInput
    data: XOR<SellerUpdateWithoutContractsInput, SellerUncheckedUpdateWithoutContractsInput>
  }

  export type SellerUpdateWithoutContractsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutSellersNestedInput
  }

  export type SellerUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    full_address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    tax_id?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    phone?: SellerUpdatephoneInput | string[]
    email?: SellerUpdateemailInput | string[]
    website?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutSellersNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutContractsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutContractsInput, ProductUncheckedUpdateWithoutContractsInput>
    create: XOR<ProductCreateWithoutContractsInput, ProductUncheckedCreateWithoutContractsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutContractsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutContractsInput, ProductUncheckedUpdateWithoutContractsInput>
  }

  export type ProductUpdateManyWithWhereWithoutContractsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutContractsInput>
  }

  export type ContractProductUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractProductWhereUniqueInput
    update: XOR<ContractProductUpdateWithoutContractInput, ContractProductUncheckedUpdateWithoutContractInput>
    create: XOR<ContractProductCreateWithoutContractInput, ContractProductUncheckedCreateWithoutContractInput>
  }

  export type ContractProductUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractProductWhereUniqueInput
    data: XOR<ContractProductUpdateWithoutContractInput, ContractProductUncheckedUpdateWithoutContractInput>
  }

  export type ContractProductUpdateManyWithWhereWithoutContractInput = {
    where: ContractProductScalarWhereInput
    data: XOR<ContractProductUpdateManyMutationInput, ContractProductUncheckedUpdateManyWithoutContractInput>
  }

  export type ArbitrationRuleUpsertWithWhereUniqueWithoutContractsInput = {
    where: ArbitrationRuleWhereUniqueInput
    update: XOR<ArbitrationRuleUpdateWithoutContractsInput, ArbitrationRuleUncheckedUpdateWithoutContractsInput>
    create: XOR<ArbitrationRuleCreateWithoutContractsInput, ArbitrationRuleUncheckedCreateWithoutContractsInput>
  }

  export type ArbitrationRuleUpdateWithWhereUniqueWithoutContractsInput = {
    where: ArbitrationRuleWhereUniqueInput
    data: XOR<ArbitrationRuleUpdateWithoutContractsInput, ArbitrationRuleUncheckedUpdateWithoutContractsInput>
  }

  export type ArbitrationRuleUpdateManyWithWhereWithoutContractsInput = {
    where: ArbitrationRuleScalarWhereInput
    data: XOR<ArbitrationRuleUpdateManyMutationInput, ArbitrationRuleUncheckedUpdateManyWithoutContractsInput>
  }

  export type ArbitrationRuleScalarWhereInput = {
    AND?: ArbitrationRuleScalarWhereInput | ArbitrationRuleScalarWhereInput[]
    OR?: ArbitrationRuleScalarWhereInput[]
    NOT?: ArbitrationRuleScalarWhereInput | ArbitrationRuleScalarWhereInput[]
    id?: IntFilter<"ArbitrationRule"> | number
    name?: StringFilter<"ArbitrationRule"> | string
    description?: StringFilter<"ArbitrationRule"> | string
    order?: IntFilter<"ArbitrationRule"> | number
    type?: StringFilter<"ArbitrationRule"> | string
    note?: StringFilter<"ArbitrationRule"> | string
    attachments?: StringNullableListFilter<"ArbitrationRule">
    createdAt?: DateTimeFilter<"ArbitrationRule"> | Date | string
    active?: BoolFilter<"ArbitrationRule"> | boolean
    status?: StringFilter<"ArbitrationRule"> | string
  }

  export type SpecialConditionUpsertWithWhereUniqueWithoutContractsInput = {
    where: SpecialConditionWhereUniqueInput
    update: XOR<SpecialConditionUpdateWithoutContractsInput, SpecialConditionUncheckedUpdateWithoutContractsInput>
    create: XOR<SpecialConditionCreateWithoutContractsInput, SpecialConditionUncheckedCreateWithoutContractsInput>
  }

  export type SpecialConditionUpdateWithWhereUniqueWithoutContractsInput = {
    where: SpecialConditionWhereUniqueInput
    data: XOR<SpecialConditionUpdateWithoutContractsInput, SpecialConditionUncheckedUpdateWithoutContractsInput>
  }

  export type SpecialConditionUpdateManyWithWhereWithoutContractsInput = {
    where: SpecialConditionScalarWhereInput
    data: XOR<SpecialConditionUpdateManyMutationInput, SpecialConditionUncheckedUpdateManyWithoutContractsInput>
  }

  export type SpecialConditionScalarWhereInput = {
    AND?: SpecialConditionScalarWhereInput | SpecialConditionScalarWhereInput[]
    OR?: SpecialConditionScalarWhereInput[]
    NOT?: SpecialConditionScalarWhereInput | SpecialConditionScalarWhereInput[]
    id?: IntFilter<"SpecialCondition"> | number
    name?: StringFilter<"SpecialCondition"> | string
    description?: StringFilter<"SpecialCondition"> | string
    tags?: StringNullableListFilter<"SpecialCondition">
    type?: StringFilter<"SpecialCondition"> | string
    note?: StringFilter<"SpecialCondition"> | string
    attachments?: StringNullableListFilter<"SpecialCondition">
    order?: IntFilter<"SpecialCondition"> | number
    createdAt?: DateTimeFilter<"SpecialCondition"> | Date | string
    active?: BoolFilter<"SpecialCondition"> | boolean
    status?: StringFilter<"SpecialCondition"> | string
  }

  export type BrokerageInvoiceUpsertWithWhereUniqueWithoutContractInput = {
    where: BrokerageInvoiceWhereUniqueInput
    update: XOR<BrokerageInvoiceUpdateWithoutContractInput, BrokerageInvoiceUncheckedUpdateWithoutContractInput>
    create: XOR<BrokerageInvoiceCreateWithoutContractInput, BrokerageInvoiceUncheckedCreateWithoutContractInput>
  }

  export type BrokerageInvoiceUpdateWithWhereUniqueWithoutContractInput = {
    where: BrokerageInvoiceWhereUniqueInput
    data: XOR<BrokerageInvoiceUpdateWithoutContractInput, BrokerageInvoiceUncheckedUpdateWithoutContractInput>
  }

  export type BrokerageInvoiceUpdateManyWithWhereWithoutContractInput = {
    where: BrokerageInvoiceScalarWhereInput
    data: XOR<BrokerageInvoiceUpdateManyMutationInput, BrokerageInvoiceUncheckedUpdateManyWithoutContractInput>
  }

  export type BrokerageInvoiceScalarWhereInput = {
    AND?: BrokerageInvoiceScalarWhereInput | BrokerageInvoiceScalarWhereInput[]
    OR?: BrokerageInvoiceScalarWhereInput[]
    NOT?: BrokerageInvoiceScalarWhereInput | BrokerageInvoiceScalarWhereInput[]
    id?: IntFilter<"BrokerageInvoice"> | number
    contract_id?: IntFilter<"BrokerageInvoice"> | number
    comission_total_usd?: FloatFilter<"BrokerageInvoice"> | number
    comission_total_brl?: FloatFilter<"BrokerageInvoice"> | number
    bl_date?: DateTimeFilter<"BrokerageInvoice"> | Date | string
    bl_number?: StringFilter<"BrokerageInvoice"> | string
    bl_attachments?: StringNullableListFilter<"BrokerageInvoice">
    ptax?: FloatFilter<"BrokerageInvoice"> | number
    attachments?: StringNullableListFilter<"BrokerageInvoice">
    createdAt?: DateTimeFilter<"BrokerageInvoice"> | Date | string
    active?: BoolFilter<"BrokerageInvoice"> | boolean
    status?: StringFilter<"BrokerageInvoice"> | string
  }

  export type ContractCreateWithoutContractProductsInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    seller: SellerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutContractProductsInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutContractProductsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutContractProductsInput, ContractUncheckedCreateWithoutContractProductsInput>
  }

  export type ProductCreateWithoutContractProductsInput = {
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    sellers?: SellerCreateNestedOneWithoutProductsInput
    contracts?: ContractCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutContractProductsInput = {
    id?: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    sellersId?: number
    createdAt?: Date | string
    active?: boolean
    status: string
    contracts?: ContractUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutContractProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutContractProductsInput, ProductUncheckedCreateWithoutContractProductsInput>
  }

  export type ContractUpsertWithoutContractProductsInput = {
    update: XOR<ContractUpdateWithoutContractProductsInput, ContractUncheckedUpdateWithoutContractProductsInput>
    create: XOR<ContractCreateWithoutContractProductsInput, ContractUncheckedCreateWithoutContractProductsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutContractProductsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutContractProductsInput, ContractUncheckedUpdateWithoutContractProductsInput>
  }

  export type ContractUpdateWithoutContractProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutContractProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ProductUpsertWithoutContractProductsInput = {
    update: XOR<ProductUpdateWithoutContractProductsInput, ProductUncheckedUpdateWithoutContractProductsInput>
    create: XOR<ProductCreateWithoutContractProductsInput, ProductUncheckedCreateWithoutContractProductsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutContractProductsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutContractProductsInput, ProductUncheckedUpdateWithoutContractProductsInput>
  }

  export type ProductUpdateWithoutContractProductsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    sellers?: SellerUpdateOneRequiredWithoutProductsNestedInput
    contracts?: ContractUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutContractProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    sellersId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ContractCreateWithoutBrokerageInvoicesInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    seller: SellerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutBrokerageInvoicesInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
  }

  export type ContractCreateOrConnectWithoutBrokerageInvoicesInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutBrokerageInvoicesInput, ContractUncheckedCreateWithoutBrokerageInvoicesInput>
  }

  export type ContractUpsertWithoutBrokerageInvoicesInput = {
    update: XOR<ContractUpdateWithoutBrokerageInvoicesInput, ContractUncheckedUpdateWithoutBrokerageInvoicesInput>
    create: XOR<ContractCreateWithoutBrokerageInvoicesInput, ContractUncheckedCreateWithoutBrokerageInvoicesInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutBrokerageInvoicesInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutBrokerageInvoicesInput, ContractUncheckedUpdateWithoutBrokerageInvoicesInput>
  }

  export type ContractUpdateWithoutBrokerageInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutBrokerageInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
  }

  export type ContractCreateWithoutArbitration_rulesInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    seller: SellerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    special_conditions?: SpecialConditionCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutArbitration_rulesInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    special_conditions?: SpecialConditionUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutArbitration_rulesInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutArbitration_rulesInput, ContractUncheckedCreateWithoutArbitration_rulesInput>
  }

  export type ContractUpsertWithWhereUniqueWithoutArbitration_rulesInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutArbitration_rulesInput, ContractUncheckedUpdateWithoutArbitration_rulesInput>
    create: XOR<ContractCreateWithoutArbitration_rulesInput, ContractUncheckedCreateWithoutArbitration_rulesInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutArbitration_rulesInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutArbitration_rulesInput, ContractUncheckedUpdateWithoutArbitration_rulesInput>
  }

  export type ContractUpdateManyWithWhereWithoutArbitration_rulesInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutArbitration_rulesInput>
  }

  export type ContractCreateWithoutSpecial_conditionsInput = {
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    customer: CustomerCreateNestedOneWithoutContractsInput
    seller: SellerCreateNestedOneWithoutContractsInput
    products?: ProductCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutSpecial_conditionsInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
    products?: ProductUncheckedCreateNestedManyWithoutContractsInput
    contractProducts?: ContractProductUncheckedCreateNestedManyWithoutContractInput
    arbitration_rules?: ArbitrationRuleUncheckedCreateNestedManyWithoutContractsInput
    brokerageInvoices?: BrokerageInvoiceUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutSpecial_conditionsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutSpecial_conditionsInput, ContractUncheckedCreateWithoutSpecial_conditionsInput>
  }

  export type ContractUpsertWithWhereUniqueWithoutSpecial_conditionsInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutSpecial_conditionsInput, ContractUncheckedUpdateWithoutSpecial_conditionsInput>
    create: XOR<ContractCreateWithoutSpecial_conditionsInput, ContractUncheckedCreateWithoutSpecial_conditionsInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutSpecial_conditionsInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutSpecial_conditionsInput, ContractUncheckedUpdateWithoutSpecial_conditionsInput>
  }

  export type ContractUpdateManyWithWhereWithoutSpecial_conditionsInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutSpecial_conditionsInput>
  }

  export type ContractProductCreateManyProductInput = {
    id?: number
    contract_id: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contract?: ContractUpdateOneRequiredWithoutContractProductsNestedInput
  }

  export type ContractProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    contract_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    contract_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManySellersInput = {
    id?: number
    sku: string
    name: string
    comercial_name: string
    category: string
    origin_country: string
    price_comercial: number
    price_local: number
    currency: string
    comission: number
    incoterm?: ProductCreateincotermInput | string[]
    regulator_organ_number: string
    sanity_rules?: ProductCreatesanity_rulesInput | string[]
    pack_type: string
    quantity_per_pack: number
    quantity_per_container: number
    container_type: string
    country_from: string
    supply_origin_country: string
    port_origin: string
    port_destination: string
    documents_required?: ProductCreatedocuments_requiredInput | string[]
    record_owner: string
    observation: string
    attached_files?: ProductCreateattached_filesInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractCreateManySellerInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    customer_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ProductUpdateWithoutSellersInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutProductsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSellersInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutProductsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSellersInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUpdateWithoutSellerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateManyCustomerInput = {
    id?: number
    name: string
    description: string
    date_creation: Date | string
    date_expiration: Date | string
    date_signature: Date | string
    date_expiration_signature: Date | string
    date_signature_customer: Date | string
    date_expiration_signature_customer: Date | string
    date_signature_seller: Date | string
    date_expiration_signature_seller: Date | string
    seller_id: number
    products_id?: ContractCreateproducts_idInput | number[]
    bording_date: Date | string
    mt_value: number
    destination_country: string
    destination_port: string
    shipping_company: string
    shipment_date: Date | string
    si_sent: boolean
    packing?: ContractCreatepackingInput | string[]
    incoterm?: ContractCreateincotermInput | string[]
    payment_terms: string
    payment_method: string
    payment_currency: string
    payment_amount: number
    payment_date: Date | string
    payment_status: string
    payment_notes: string
    payment_attachments?: ContractCreatepayment_attachmentsInput | string[]
    payment_notes_customer: string
    payment_attachments_customer?: ContractCreatepayment_attachments_customerInput | string[]
    payment_notes_seller: string
    payment_attachments_seller?: ContractCreatepayment_attachments_sellerInput | string[]
    special_terms?: ContractCreatespecial_termsInput | string[]
    business_terms?: ContractCreatebusiness_termsInput | string[]
    legal_terms?: ContractCreatelegal_termsInput | string[]
    other_terms?: ContractCreateother_termsInput | string[]
    other_terms_customer?: ContractCreateother_terms_customerInput | string[]
    other_terms_seller?: ContractCreateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractCreateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractCreateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractCreateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractCreateother_terms_seller_customer_sellerInput | string[]
    commission_customer: number
    commission_seller: number
    comission_total: number
    attachments?: ContractCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ContractUpdateWithoutCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductCreateManyContractInput = {
    id?: number
    product_id: number
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type BrokerageInvoiceCreateManyContractInput = {
    id?: number
    comission_total_usd: number
    comission_total_brl: number
    bl_date: Date | string
    bl_number: string
    bl_attachments?: BrokerageInvoiceCreatebl_attachmentsInput | string[]
    ptax: number
    attachments?: BrokerageInvoiceCreateattachmentsInput | string[]
    createdAt?: Date | string
    active?: boolean
    status: string
  }

  export type ProductUpdateWithoutContractsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    sellers?: SellerUpdateOneRequiredWithoutProductsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    sellersId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    contractProducts?: ContractProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comercial_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin_country?: StringFieldUpdateOperationsInput | string
    price_comercial?: FloatFieldUpdateOperationsInput | number
    price_local?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    comission?: FloatFieldUpdateOperationsInput | number
    incoterm?: ProductUpdateincotermInput | string[]
    regulator_organ_number?: StringFieldUpdateOperationsInput | string
    sanity_rules?: ProductUpdatesanity_rulesInput | string[]
    pack_type?: StringFieldUpdateOperationsInput | string
    quantity_per_pack?: FloatFieldUpdateOperationsInput | number
    quantity_per_container?: FloatFieldUpdateOperationsInput | number
    container_type?: StringFieldUpdateOperationsInput | string
    country_from?: StringFieldUpdateOperationsInput | string
    supply_origin_country?: StringFieldUpdateOperationsInput | string
    port_origin?: StringFieldUpdateOperationsInput | string
    port_destination?: StringFieldUpdateOperationsInput | string
    documents_required?: ProductUpdatedocuments_requiredInput | string[]
    record_owner?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    attached_files?: ProductUpdateattached_filesInput | string[]
    sellersId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductUpdateWithoutContractInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutContractProductsNestedInput
  }

  export type ContractProductUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractProductUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArbitrationRuleUpdateWithoutContractsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArbitrationRuleUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArbitrationRuleUncheckedUpdateManyWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: ArbitrationRuleUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialConditionUpdateWithoutContractsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialConditionUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialConditionUncheckedUpdateManyWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: SpecialConditionUpdatetagsInput | string[]
    type?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    attachments?: SpecialConditionUpdateattachmentsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BrokerageInvoiceUpdateWithoutContractInput = {
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BrokerageInvoiceUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BrokerageInvoiceUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    comission_total_usd?: FloatFieldUpdateOperationsInput | number
    comission_total_brl?: FloatFieldUpdateOperationsInput | number
    bl_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bl_number?: StringFieldUpdateOperationsInput | string
    bl_attachments?: BrokerageInvoiceUpdatebl_attachmentsInput | string[]
    ptax?: FloatFieldUpdateOperationsInput | number
    attachments?: BrokerageInvoiceUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUpdateWithoutArbitration_rulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    special_conditions?: SpecialConditionUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutArbitration_rulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    special_conditions?: SpecialConditionUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutArbitration_rulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUpdateWithoutSpecial_conditionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContractsNestedInput
    seller?: SellerUpdateOneRequiredWithoutContractsNestedInput
    products?: ProductUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutSpecial_conditionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutContractsNestedInput
    contractProducts?: ContractProductUncheckedUpdateManyWithoutContractNestedInput
    arbitration_rules?: ArbitrationRuleUncheckedUpdateManyWithoutContractsNestedInput
    brokerageInvoices?: BrokerageInvoiceUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutSpecial_conditionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_customer?: DateTimeFieldUpdateOperationsInput | Date | string
    date_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    date_expiration_signature_seller?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    products_id?: ContractUpdateproducts_idInput | number[]
    bording_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mt_value?: FloatFieldUpdateOperationsInput | number
    destination_country?: StringFieldUpdateOperationsInput | string
    destination_port?: StringFieldUpdateOperationsInput | string
    shipping_company?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    si_sent?: BoolFieldUpdateOperationsInput | boolean
    packing?: ContractUpdatepackingInput | string[]
    incoterm?: ContractUpdateincotermInput | string[]
    payment_terms?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_currency?: StringFieldUpdateOperationsInput | string
    payment_amount?: FloatFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_notes?: StringFieldUpdateOperationsInput | string
    payment_attachments?: ContractUpdatepayment_attachmentsInput | string[]
    payment_notes_customer?: StringFieldUpdateOperationsInput | string
    payment_attachments_customer?: ContractUpdatepayment_attachments_customerInput | string[]
    payment_notes_seller?: StringFieldUpdateOperationsInput | string
    payment_attachments_seller?: ContractUpdatepayment_attachments_sellerInput | string[]
    special_terms?: ContractUpdatespecial_termsInput | string[]
    business_terms?: ContractUpdatebusiness_termsInput | string[]
    legal_terms?: ContractUpdatelegal_termsInput | string[]
    other_terms?: ContractUpdateother_termsInput | string[]
    other_terms_customer?: ContractUpdateother_terms_customerInput | string[]
    other_terms_seller?: ContractUpdateother_terms_sellerInput | string[]
    other_terms_customer_seller?: ContractUpdateother_terms_customer_sellerInput | string[]
    other_terms_seller_customer?: ContractUpdateother_terms_seller_customerInput | string[]
    other_terms_customer_seller_customer?: ContractUpdateother_terms_customer_seller_customerInput | string[]
    other_terms_seller_customer_seller?: ContractUpdateother_terms_seller_customer_sellerInput | string[]
    commission_customer?: FloatFieldUpdateOperationsInput | number
    commission_seller?: FloatFieldUpdateOperationsInput | number
    comission_total?: FloatFieldUpdateOperationsInput | number
    attachments?: ContractUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
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