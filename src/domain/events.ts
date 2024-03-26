import { Event } from "@event-driven-io/emmett";
import { OrderItem } from "./orderItem";
import { ShippingAddress } from "./shippingAddress";

type BaseEvent = {
    orderId: string;
};

export type OrderPlaced = Event<
    "OrderPlaced",
    BaseEvent & {
        customerId: string;
        items: [OrderItem],
        shippingAddress: ShippingAddress;
        total: number;
    },
    {
        version: number;
    }
>;

export type OrderConfirmed = Event<
    "OrderConfirmed",
    BaseEvent & {
        payment: {
            transactionId: string;
            method: string;
        }
    },
    {
        version: number;
    }
>;

export type OrderApproved = Event<
    "OrderApproved",
    BaseEvent,
    {
        version: number;
    }
>;

