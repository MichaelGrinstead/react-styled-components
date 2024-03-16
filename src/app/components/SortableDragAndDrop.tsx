import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS, Transform } from "@dnd-kit/utilities";
import { Dispatch, SetStateAction, useState } from "react";

interface DroppableItemProps {
  setList?: Dispatch<SetStateAction<UniqueIdentifier[]>>;
  handleDragEnd?: (e: DragEndEvent) => void;
  children: React.ReactNode;
}

export function DroppableItem({ children }: DroppableItemProps) {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const [position, setPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: 0, y: 0 });
  const { isDragging, attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: "div" });

  const handleDragEnd = (e: DragEndEvent) => {
    const { delta } = e;
    if (delta) {
      setPosition({
        x: transform?.x,
        y: transform?.y,
      });
    }

    console.log(position);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {children}
    </DndContext>
  );
}

interface SortableItemProps {
  children: React.ReactNode;
  list: UniqueIdentifier[];
}
export function SortableItem({ children, list }: SortableItemProps) {
  return (
    <SortableContext items={list} strategy={verticalListSortingStrategy}>
      {children}
    </SortableContext>
  );
}

interface DraggableSortableItemProps {
  children: React.ReactNode;
  id: UniqueIdentifier;
}

export function DraggableSortableItem({
  children,
  id,
}: DraggableSortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

interface DraggableItemProps {
  id: UniqueIdentifier;
  position?: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  children: React.ReactNode;
  isDragging: boolean;
  setNodeRef: (element: HTMLElement | null) => void;
  attributes: any;
  listeners: any;
  transform: Transform | null;
}

export function DraggableItem({
  id,
  position,
  setPosition,
  isDragging,
  setNodeRef,
  attributes,
  listeners,
  transform,
  children,
}: DraggableItemProps) {
  console.log(transform, position);

  const style = {
    transform: isDragging
      ? CSS.Transform.toString(transform)
      : `translate3d(${position?.x}px, ${position?.y}px, 0)`,
  };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
