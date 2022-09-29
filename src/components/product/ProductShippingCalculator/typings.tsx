export interface DeliveryId {
  courierId: string;
  warehouseId: string;
  dockId: string;
  courierName: string;
  quantity: number;
  kitItemDetails: any[];
}

export interface PickupStoreInfo {
  isPickupStore: boolean;
  friendlyName?: any;
  address?: any;
  additionalInfo?: any;
  dockId?: any;
}

export interface Sla {
  id: string;
  deliveryChannel: string;
  name: string;
  deliveryIds: DeliveryId[];
  shippingEstimate: string;
  shippingEstimateDate?: any;
  lockTTL?: any;
  availableDeliveryWindows: any[];
  deliveryWindow?: any;
  price: number;
  listPrice: number;
  tax: number;
  pickupStoreInfo: PickupStoreInfo;
  pickupPointId?: any;
  pickupDistance: number;
  polygonName: string;
  transitTime: string;
}

export interface DeliveryChannel {
  id: string;
}

export interface SimulateObject {
  itemIndex: number;
  addressId?: any;
  selectedSla?: any;
  selectedDeliveryChannel?: any;
  quantity: number;
  shipsTo: string[];
  slas: Sla[];
  deliveryChannels: DeliveryChannel[];
}
