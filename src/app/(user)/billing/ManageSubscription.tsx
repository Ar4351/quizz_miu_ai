"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const ManageSunscription = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
  
    try {
      const res = await fetch('/api/stripe/create-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
      }
  
      const data = await res.json();
      window.location.href = data.url;
  
    } catch (error) {
      console.log('Subscribe Button Error', error);
      setLoading(false);
    }
  };
  
  return (
    <Button disabled={loading} onClick={redirectToCustomerPortal}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </>
      ) : (
        "Change Your Subscription"
      )}
    </Button>
  );
};

export default ManageSunscription;