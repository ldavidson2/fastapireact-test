/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginInputValues = {
    Field0?: string;
    Field1?: string;
};
export declare type LoginValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    LoginGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<{
    overrides?: LoginOverridesProps | undefined | null;
} & {
    onSubmit: (fields: LoginInputValues) => void;
    onChange?: (fields: LoginInputValues) => LoginInputValues;
    onValidate?: LoginValidationValues;
} & React.CSSProperties>;
export default function Login(props: LoginProps): React.ReactElement;
