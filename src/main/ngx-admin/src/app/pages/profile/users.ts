/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */
export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  userName: string;
  password: string;
  picture: string;
  address: Address;
}

export class Address {
  street: string;
  city: string;
  zipCode: string;
}

// export abstract class UserData {
//   abstract getCurrentUser(): Observable<User>;
//   abstract list(pageNumber: number, pageSize: number): Observable<User[]>;
//   abstract get(id: number): Observable<User>;
//   abstract update(user: User): Observable<User>;
//   abstract create(user: User): Observable<User>;
//   abstract delete(id: number): Observable<boolean>;
// }
