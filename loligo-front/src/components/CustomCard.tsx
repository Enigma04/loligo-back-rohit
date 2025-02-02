import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip} from "@nextui-org/react";

interface IChip{
  chipcolor: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  chipvalue: String;
}


export default function CustomCard(prop:IChip) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
        <Chip color={prop.chipcolor} size="sm">{prop.chipvalue}</Chip>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://LinkToTheUserWebsite"
        >
          Visit the this website
        </Link>
      </CardFooter>
    </Card>
  );
}

