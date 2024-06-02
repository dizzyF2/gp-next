/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

  // ========================================

declare type SignUpParams = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    //ssn: string;
    email: string;
    password: string;
};

declare type LoginUser = {
    email: string;
    password: string;
};

declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
};

declare type NewUserParams = {
    userId: string;
    email: string;
    name: string;
    password: string;
};

declare type Receiver = {
    firstName: string;
    lastName: string;
};

declare type NewDwollaCustomerParams = {
    firstName: string;
    lastName: string;
    email: string;
    type: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
};

declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
}

declare interface MobileNavProps {
    user: User;
}

declare interface PageHeaderProps {
    topTitle: string;
    bottomTitle: string;
    topDescription: string;
    bottomDescription: string;
    connectBank?: boolean;
}

declare interface PaginationProps {
    page: number;
    totalPages: number;
}

  // declare type User = sdk.Models.Document & {
  //   accountId: string;
  //   email: string;
  //   name: string;
  //   items: string[];
  //   accessToken: string;
  //   image: string;
  // };

declare interface AuthFormProps {
    type: "sign-in" | "sign-up";
}

declare interface HeaderProps {
    user: User;
}

declare interface FooterProps {
    user: User;
    type?: 'mobile' | 'desktop'
}

declare interface SiderbarProps {
    user: User;
}

declare interface CategoryProps {
    category: CategoryCount;
}

declare interface DoughnutChartProps {
    accounts: Account[];
}

  // Actions
declare interface getAccountsProps {
    userId: string;
}

declare interface getAccountProps {
    appwriteItemId: string;
}

declare interface getInstitutionProps {
    institutionId: string;
}

declare interface signInProps {
    email: string;
    password: string;
}

declare interface getUserInfoProps {
    userId: string;
}

declare interface exchangePublicTokenProps {
    publicToken: string;
    user: User;
}

