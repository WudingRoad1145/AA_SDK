import { UserOperationStruct } from "@account-abstraction/contracts";
import { PaymasterAPI } from "@account-abstraction/sdk";
import { BaseApiParams, BaseWalletAPI } from '@account-abstraction/sdk/dist/src/BaseWalletAPI'
import { ethers } from "ethers";

export class MyPaymasterApi extends PaymasterAPI {

    async getPaymasterAndData (userOp: Partial<UserOperationStruct>): Promise<string> {
        // return your paymaster information here
        const p = ethers.utils.hexlify("0x60b7eB00c36bAae69e993188421AFd91095d3125")
        const n = ethers.utils.hexlify("0x75d138c01ad07c06f0fc18f6df3668eb04bda030")
        return ethers.utils.hexConcat([p, n])
    }
}