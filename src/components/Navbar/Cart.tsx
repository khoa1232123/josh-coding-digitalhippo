"use client";
import React from "react";
import {
  Separator,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  buttonVariants,
} from "../ui";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Cart = (props: Props) => {
  const itemCount = 0;
  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 relative">
        <ShoppingCart
          aria-hidden={true}
          className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-200 group-hover:text-gray-500"
        />
        <span className="absolute top-0 right-0 ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {itemCount}
        </span>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>Cart ({itemCount})</SheetTitle>
          </SheetHeader>
          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">cart items</div>
              <div className="space-y-4 pr-6">
                <Separator />
                <div className="space-y-1.5 text-sm">
                  <div className="flex">
                    <span className="flex-1">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Trasaction Fee</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Total</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                </div>

                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href={"/cart"}
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Continue to Checkout
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <Image
                  src={"/hippo-empty-cart.png"}
                  fill
                  alt="empty shopping cart hippo"
                />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <Link
                  href={"/products"}
                  className={buttonVariants({
                    className: "text-sm text-muted-foreground",
                    variant: "link",
                    size: "sm",
                  })}
                >
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          )}
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default Cart;
