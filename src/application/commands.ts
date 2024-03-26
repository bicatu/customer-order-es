import { Command } from "@event-driven-io/emmett";
import { ShippingAddress } from "../domain/shippingAddress";
import { OrderItem } from "../domain/orderItem";

export type PlaceOrder = Command<
    "PlaceOrder",
    {
        orderId: string;
        customerId: string;
        items: [
            OrderItem
        ],
        shippingAddress: ShippingAddress;
        total: number;
    }
>;

export type ConfirmOrder = Command<
    "ConfirmOrder",
    {
        orderId: string;
        payment: {
            transactionId: string;
            method: string;
        }
    }
>;

export type ApproveOrder = Command<
    "ApproveOrder",
    {
        orderId: string;
    }
>;

export type DeclineOrder = Command<
    "DeclineOrder",
    {
        orderId: string;
        reason: string;
    }
>;

export type CancelOrder = Command<
    "CancelOrder",
    {
        orderId: string;
        reason: string;
    }
>;


export type UpdateShippingAddress = Command<
    "UpdateShippingAddress",
    {
        orderId: string;
        shippingAddress: ShippingAddress;
    }
>;

export type AddOrderItems = Command<
    "AddOrderItems",
    {
        orderId: string;
        items: [OrderItem]
    }
>;

export type RemoveOrderItems = Command<
    "RemoveOrderItems",
    {
        orderId: string;
        items: [OrderItem]
    }
>;

export type RouteOrder = Command<
    "RouteOrder",
    {
        orderId: string;
        route: string;
    }
>;

export type BeginOrderFulfillment = Command<
    "BeginOrderFulfillment",
    {
        orderId: string;
    }
>;

export type ShipOrder = Command<
    "ShipOrder",
    {
        orderId: string;
        carrier: string;
        trackingId: string;
    }
>;

export type OrderCommand = PlaceOrder | ConfirmOrder | ApproveOrder | DeclineOrder | CancelOrder | UpdateShippingAddress | AddOrderItems | RemoveOrderItems | RouteOrder | BeginOrderFulfillment | ShipOrder;