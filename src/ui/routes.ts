import { type WebApiSetup } from "@event-driven-io/emmett-expressjs";
import { Router } from "express";
import { EventStore, assertNotEmptyString, isNumber } from "@event-driven-io/emmett";
import type { Request, Response } from 'express';
import { randomUUID } from "node:crypto";


export const OrdersApi = (eventStore: EventStore): WebApiSetup => 
    (router: Router):void => {
        
    }
