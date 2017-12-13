/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This is the en-001 short locale date format. Setting as default.
 */
export const DEFAULT_LOCALE_FORMAT: string = "dd/MM/y";

export const SEPARATORS: string[] = ["/", "-"];

export const LITTLE_ENDIAN_REGEX = /d+.m+.y+/;
export const MIDDLE_ENDIAN_REGEX = /m+.d+.y+/;
//No need for BIG_ENDIAN_REGEX because anything that doesn't satisfy the above 2
//is automatically BIG_ENDIAN

export const YEAR: string = "yyyy";
export const MONTH: string = "mm";
export const DATE: string = "dd";

export type EndianType = "LITTLE_ENDIAN" | "MIDDLE_ENDIAN" | "BIG_ENDIAN";

export type InputDateDisplayFormat = {
  readonly name: EndianType;
  readonly format: string;
};

export const LITTLE_ENDIAN: InputDateDisplayFormat = {
    name: "LITTLE_ENDIAN",
    format: DATE + "/" + MONTH + "/" + YEAR
};

export const MIDDLE_ENDIAN: InputDateDisplayFormat = {
    name: "MIDDLE_ENDIAN",
    format: MONTH + "/" + DATE + "/" + YEAR
};

export const BIG_ENDIAN: InputDateDisplayFormat = {
    name: "BIG_ENDIAN",
    format: YEAR + "/" + MONTH + "/" + DATE
};
